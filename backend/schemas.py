from pydantic import BaseModel, EmailStr
from datetime import date

class EmployeeCreate(BaseModel):
    employee_id: str
    full_name: str
    email: EmailStr
    department: str

class EmployeeOut(EmployeeCreate):
    pass

class AttendanceCreate(BaseModel):
    employee_id: str
    date: date
    status: str

class AttendanceOut(AttendanceCreate):
    pass