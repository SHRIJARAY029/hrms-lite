import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employees from "./pages/EmployeesPage";
import Attendance from "./pages/AttendancePage";

function App() {
  return (
    <Router>
      <div className="p-4">
        <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-black">HRMS Lite</h1> 
        </div>
         <div className="min-h-screen flex justify-center items-start p-10 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
        <div className="w-full max-w-5xl">
        <nav className="flex items-center gap-4 mb-4">
          <Link to="/employees" className="font-bold text-blue-600"><button className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100">Employees</button></Link>
          <Link to="/attendance" className="font-bold text-blue-600"><button className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100">Attendance</button></Link>
        </nav>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
        </div>
      </div>

      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage";
// import EmployeesPage from "./pages/EmployeesPage";
// import AttendancePage from "./pages/AttendancePage";

// function App() {
//   return (
//     <Router>
//       <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 p-4 shadow-lg">
//         <div className="flex justify-between items-center text-white">
//           <h1 className="text-2xl font-bold">HRMS Lite</h1>
//           <div className="flex gap-4">
//             <Link to="/dashboard" className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100">Dashboard</Link>
//             <Link to="/employees" className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100">Employees</Link>
//             <Link to="/attendance" className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100">Attendance</Link>
//           </div>
//         </div>
//       </nav>
//       <div className="p-6">
//         <Routes>
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/employees" element={<EmployeesPage />} />
//           <Route path="/attendance" element={<AttendancePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;