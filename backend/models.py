class Employee:
    def __init__(self, employee_id, full_name, email, department):
        self.employee_id = employee_id
        self.full_name = full_name
        self.email = email
        self.department = department

class Attendance:
    def __init__(self, employee_id, date, status):
        self.employee_id = employee_id
        self.date = date
        self.status = status