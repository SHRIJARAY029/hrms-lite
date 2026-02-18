import { useEffect, useState } from "react";
import { getDashboardSummary } from "../api";

export default function DashboardPage() {
  const [summary, setSummary] = useState({ employees: 0, attendance_records: 0, present_today: 0 });

  useEffect(() => {
    getDashboardSummary().then(setSummary);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-lg font-bold">Employees</h2>
        <p className="text-2xl text-blue-600">{summary.employees}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-lg font-bold">Attendance Records</h2>
        <p className="text-2xl text-indigo-600">{summary.attendance_records}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-lg font-bold">Present Today</h2>
        <p className="text-2xl text-green-600">{summary.present_today}</p>
      </div>
    </div>
  );
}