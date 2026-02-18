import { useState } from "react";
import { getAttendance } from "../api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [empId, setEmpId] = useState("");

  // Add a new attendance record to the list
  const handleMark = (rec) => setRecords([...records, rec]);

  // Fetch attendance records for a given employee
  const handleFetch = async () => {
    if (!empId) {
      alert("Please enter an Employee ID");
      return;
    }
    const data = await getAttendance(empId);
    setRecords(data);
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Attendance Management</h2>

      {/* Form to mark attendance */}
      <AttendanceForm onMark={handleMark} />

      {/* Section to fetch attendance records */}
      <div className="mt-6 space-y-2">
        <input
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={handleFetch}
          className="bg-blue-500 rounded-lg text-white px-4 py-2"
        >
          View Attendance
        </button>
      </div>

      {/* Display attendance records */}
      <div className="mt-6">
        <AttendanceList records={records} />
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { markAttendance, getAttendance } from "../api";

// export default function AttendancePage() {
//   const [form, setForm] = useState({ employee_id: "", date: "", status: "Present" });
//   const [records, setRecords] = useState([]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     await markAttendance(form);
//     setRecords(await getAttendance(form.employee_id));
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
//       <h1 className="text-xl font-bold mb-4">Attendance</h1>
//       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//         <input className="border p-2 rounded" placeholder="Employee ID" value={form.employee_id} onChange={e => setForm({ ...form, employee_id: e.target.value })} />
//         <input className="border p-2 rounded" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
//         <select className="border p-2 rounded" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
//           <option>Present</option>
//           <option>Absent</option>
//         </select>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Mark</button>
//       </form>

//       <ul className="divide-y divide-gray-200">
//         {records.map((rec, i) => (
//           <li key={i} className="py-3">{rec.date}: {rec.status}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }