import { deleteEmployee } from "../api";

export default function EmployeeList({ employees, onDelete }) {
  return (
    <ul className="space-y-2">
      {employees.map(emp => (
        <li key={emp.employee_id} className="flex justify-between border p-2">
          <div>
            <p>{emp.full_name} ({emp.department})</p>
            <p className="text-sm text-gray-600">{emp.email}</p>
          </div>
          <button onClick={() => onDelete(emp.employee_id)} className="bg-red-500 rounded-lg text-white px-2">Delete</button>
        </li>
      ))}
    </ul>
  );
}