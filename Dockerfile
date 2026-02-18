# # Stage 1: Build frontend
# FROM node:20-alpine AS frontend-build
# WORKDIR /frontend
# COPY frontend/package*.json ./
# RUN npm ci
# COPY frontend/ .
# RUN chmod +x node_modules/.bin/* && npm run build

# # Stage 2: Backend + serve frontend
# FROM python:3.11-slim
# WORKDIR /app

# # Install backend dependencies
# COPY backend/requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy backend code
# COPY backend/ .

# # Copy built frontend into backend static folder
# COPY --from=frontend-build /frontend/dist ./static

# # Expose FastAPI port
# EXPOSE 8000

# # Run FastAPI
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
# Stage 1: Build frontend
FROM node:20-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN chmod +x node_modules/.bin/* && npm run build

# Stage 2: Backend + serve frontend
FROM python:3.11-slim
WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ✅ keep backend folder
COPY backend ./backend

COPY --from=frontend-build /frontend/dist ./backend/static

EXPOSE 8000

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
