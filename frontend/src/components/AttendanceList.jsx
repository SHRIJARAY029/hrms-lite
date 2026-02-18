export default function AttendanceList({ records }) {
  return (
    <ul className="space-y-2">
      {records.map((rec, idx) => (
        <li key={idx} className="border p-2">
          <p>{rec.date} - {rec.status}</p>
        </li>
      ))}
    </ul>
  );
}