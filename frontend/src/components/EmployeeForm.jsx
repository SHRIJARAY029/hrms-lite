import { useState } from "react";
import { addEmployee } from "../api";

export default function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ employee_id:"", full_name:"", email:"", department:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmp = await addEmployee(form);
      onAdd(newEmp);
      setForm({ employee_id:"", full_name:"", email:"", department:"" });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {["employee_id","full_name","email","department"].map(field => (
        <input key={field} placeholder={field.replace("_"," ")} 
               value={form[field]} 
               onChange={e=>setForm({...form, [field]:e.target.value})}
               className="border p-2 w-full"/>
      ))}
      <button type="submit" className="bg-blue-500 rounded-lg text-white px-4 py-2">Add Employee</button>
    </form>
  );
}