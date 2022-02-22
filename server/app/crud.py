from sqlalchemy.orm import Session

from . import models, schemas

def get_forests(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.Forest).offset(skip).limit(limit).all()

def get_forest(db: Session, forest_id: int):
	return db.query(models.Forest).filter(models.Forest.id == forest_id).first()

def get_forest_by_name(db: Session, forest_name: str):
	return db.query(models.Forest).filter(models.Forest.name == forest_name).first()

def create_forest(db: Session, forest_name: str, forest: schemas.ForestCreate):
	db_forest = models.Forest(name=forest_name, **forest.dict())
	db.add(db_forest)
	db.commit()
	db.refresh(db_forest)
	return db_forest

def update_forest(db: Session, forest_id: int, forest: schemas.ForestUpdate):
	db_forest = db.query(models.Forest).filter(models.Forest.id == forest_id).first()

	if not db_forest:
		return None;

	for var, val in vars(forest).items():
		setattr(db_forest, var, val)

	db.commit()
	db.refresh(db_forest)
	return db_forest