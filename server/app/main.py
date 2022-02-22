from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/forests/", response_model=schemas.Forest)
def create_forest(forest_name: str, forest: schemas.ForestCreate, db: Session = Depends(get_db)):
    db_forest = crud.get_forest_by_name(db, forest_name=forest_name);
    if db_forest:
        raise HTTPException(status_code=400, detail="Forest already created")
    return crud.create_forest(db=db, forest_name=forest_name, forest=forest)

@app.get("/forests/", response_model=List[schemas.Forest])
def read_forests(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    forests = crud.get_forests(db, skip=skip, limit=limit)
    return forests

@app.get("/forests/{forest_id:int}", response_model=schemas.Forest)
def read_forest(forest_id: int, db: Session = Depends(get_db)):
    db_forest = crud.get_forest(db, forest_id=forest_id)
    if db_forest is None:
        raise HTTPException(status_code=404, detail="Forest not found")
    return db_forest

@app.get('/forests/{forest_name:str}', response_model=schemas.Forest)
def read_forest_by_name(forest_name: str, db: Session = Depends(get_db)):
    db_forest = crud.get_forest_by_name(db, forest_name=forest_name)
    if db_forest is None:
        raise HTTPException(status_code=404, detail="Forest not found")
    return db_forest

@app.patch("/forests/{forest_id:int}", response_model=schemas.Forest)
def update_forest(forest_id: int, forest: schemas.ForestUpdate, db: Session = Depends(get_db)):
    db_forest = crud.update_forest(db=db, forest_id=forest_id, forest=forest);

    if db_forest is None:
        raise HTTPException(status_code=404, detail="Forest does not exist")

    return db_forest