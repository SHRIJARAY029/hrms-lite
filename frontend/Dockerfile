# Frontend Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy frontend code
COPY frontend/ .

# Build production files
RUN npm run build

# Serve with a lightweight web server
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]