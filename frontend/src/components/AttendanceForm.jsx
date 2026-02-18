import { useState } from "react";
import { markAttendance } from "../api";

export default function AttendanceForm({ onMark }) {
  const [form, setForm] = useState({ employee_id:"", date:"", status:"Present" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newAtt = await markAttendance(form);
      onMark(newAtt);
      setForm({ employee_id:"", date:"", status:"Present" });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input placeholder="Employee ID" value={form.employee_id} onChange={e=>setForm({...form, employee_id:e.target.value})} className="border p-2 w-full"/>
      <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} className="border p-2 w-full"/>
      <select value={form.status} onChange={e=>setForm({...form, status:e.target.value})} className="border p-2 w-full">
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button type="submit" className="bg-green-500 rounded-lg text-white px-4 py-2">Mark Attendance</button>
    </form>
  );
}