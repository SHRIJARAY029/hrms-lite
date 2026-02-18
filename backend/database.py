import motor.motor_asyncio
import os

MONGO_URL = os.getenv("MONGO_URL", "mongodb+srv://shrijaray_db_user:aL0Mg6p2gkJHthLL@hrms-cluster.igoojys.mongodb.net/?appName=hrms-cluster&retryWrites=true&w=majority")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
db = client.hrms_lite

employees_collection = db["employees"]
attendance_collection = db["attendance"]
