from fastapi import APIRouter, HTTPException
# from ..schemas import EmployeeCreate, EmployeeOut
from backend.schemas import EmployeeCreate, EmployeeOut
from ..services import EmployeeService

router = APIRouter(prefix="/employees", tags=["Employees"])
service = EmployeeService()

@router.post("/", response_model=EmployeeOut)
async def create_employee(emp: EmployeeCreate):
    try:
        return await service.create(emp.dict())
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/", response_model=list[EmployeeOut])
async def list_employees():
    return await service.list()

@router.delete("/{emp_id}")
async def delete_employee(emp_id: str):
    try:
        await service.delete(emp_id)
        return {"message": "Employee deleted"}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))