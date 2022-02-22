from typing import List, Optional

from pydantic import BaseModel

class ForestBase(BaseModel):
    long_description: Optional[str] = None
    forest_type: Optional[str] = None
    short_description: Optional[str] = None
    long_description: Optional[str] = None
    thumbnail_filename: Optional[str] = None
    location: Optional[str] = None
    area: Optional[str] = None
    country: Optional[str] = None
    health_metrics: Optional[str] = None
    

class ForestCreate(ForestBase):
    pass

class ForestUpdate(ForestBase):
    pass

class Forest(ForestBase):
    id: int
    name: str

    class Config:
        orm_mode = True