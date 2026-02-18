from fastapi import APIRouter, HTTPException
# from ..schemas import AttendanceCreate, AttendanceOut
from backend.schemas import AttendanceCreate, AttendanceOut
from ..services import AttendanceService

router = APIRouter(prefix="/attendance", tags=["Attendance"])
service = AttendanceService()

@router.post("/", response_model=AttendanceOut)
async def mark_attendance(att: AttendanceCreate):
    try:
        return await service.mark(att.dict())
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.get("/{emp_id}", response_model=list[AttendanceOut])
async def get_attendance(emp_id: str):
    return await service.get_by_employee(emp_id)