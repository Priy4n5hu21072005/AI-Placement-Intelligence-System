from pydantic import BaseModel

class StudentInput(BaseModel):
    cgpa: float
    internship_count: int
    project_count: int
    skills_score: float
    communication_score: float
    certifications: int
    dsa_score: float
    college_tier: int
    branch: str