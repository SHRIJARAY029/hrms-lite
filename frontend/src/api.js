// const API_URL = "http://localhost:8000"; // replace with deployed backend URL
const API_URL = "http://127.0.0.1:8000"; // or http://localhost:8000

export async function getEmployees() {
  const res = await fetch(`${API_URL}/employees`);
  return res.json();
}

export async function addEmployee(emp) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emp),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function deleteEmployee(id) {
  await fetch(`${API_URL}/employees/${id}`, { method: "DELETE" });
}

export async function markAttendance(att) {
  const res = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(att),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getAttendance(empId) {
  const res = await fetch(`${API_URL}/attendance/${empId}`);
  return res.json();
}