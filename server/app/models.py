from sqlalchemy import Column, String, Integer, JSON

from .database import Base

class Forest(Base):
    __tablename__ = "forests"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    forest_type = Column(String)
    short_description = Column(String)
    long_description = Column(String)
    thumbnail_filename = Column(String)
    location = Column(String)
    area = Column(String)
    country = Column(String)
    health_metrics = Column(JSON)