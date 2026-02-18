from .database import employees_collection, attendance_collection
from datetime import date

class EmployeeService:
    def __init__(self, collection=employees_collection):
        self.collection = collection

    async def create(self, emp: dict):
        existing = await self.collection.find_one({"email": emp["email"]})
        if existing:
            raise ValueError("Email already exists")
        await self.collection.insert_one(emp)
        return emp

    async def list(self):
        cursor = self.collection.find({}, {"_id": 0})
        return [doc async for doc in cursor]

    async def delete(self, emp_id: str):
        result = await self.collection.delete_one({"employee_id": emp_id})
        if result.deleted_count == 0:
            raise ValueError("Employee not found")
        return True

class AttendanceService:
    def __init__(self, collection=attendance_collection):
        self.collection = collection

    async def mark(self, att: dict):
        emp = await employees_collection.find_one({"employee_id": att["employee_id"]})
        if not emp:
            raise ValueError("Employee not found")
        if isinstance(att.get("date"), date):
            att["date"] = att["date"].isoformat()

        await self.collection.insert_one(att)
        return att

    async def get_by_employee(self, emp_id: str):
        cursor = self.collection.find({"employee_id": emp_id}, {"_id": 0})
        return [doc async for doc in cursor]