from pymongo import MongoClient

uri = "mongodb+srv://shrijaray_db_user:aL0Mg6p2gkJHthLL@hrms-cluster.igoojys.mongodb.net/?appName=hrms-cluster&retryWrites=true&w=majority"
client = MongoClient(uri)

try:
    print("Databases:", client.list_database_names())
    print("Connection successful!")
except Exception as e:
    print("Connection failed:", e)