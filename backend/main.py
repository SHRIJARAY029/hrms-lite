# from fastapi import FastAPI
# # from routers import employees, attendance
# from .routers import employees, attendance

# app = FastAPI(title="HRMS Lite")

# app.include_router(employees.router)
# app.include_router(attendance.router)

from fastapi import FastAPI
from .routers import employees, attendance
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="HRMS Lite")

app.include_router(employees.router)
app.include_router(attendance.router)

@app.get("/")
async def root():
    return {"message": "HRMS Lite API is running!"}


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)