import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  const handleAdd = (emp) => setEmployees([...employees, emp]);
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter(e => e.employee_id !== id));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Employee Management</h2>
      <EmployeeForm onAdd={handleAdd} />
      <EmployeeList employees={employees} onDelete={handleDelete} />
    </div>
  );
}

