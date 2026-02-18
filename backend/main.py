# from fastapi import FastAPI
# # from routers import employees, attendance
# from .routers import employees, attendance

# app = FastAPI(title="HRMS Lite")

# app.include_router(employees.router)
# app.include_router(attendance.router)

# from fastapi import FastAPI
# from backend.routers import employees, attendance
# from fastapi.middleware.cors import CORSMiddleware


# app = FastAPI(title="HRMS Lite")

# app.include_router(employees.router)
# app.include_router(attendance.router)

# @app.get("/")
# async def root():
#     return {"message": "HRMS Lite API is running!"}


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],  # or ["http://localhost:5173"]
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


from fastapi import FastAPI
from backend.routers import employees, attendance
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path


app = FastAPI(title="HRMS Lite")

# ---------- Static Frontend Setup ----------
BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"

# serve vite built assets folder
app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="assets")


# ---------- Routers ----------
app.include_router(employees.router)
app.include_router(attendance.router)


# ---------- Frontend Root ----------
@app.get("/")
async def serve_frontend():
    return FileResponse(STATIC_DIR / "index.html")


# ---------- CORS ----------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # change later to your domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
