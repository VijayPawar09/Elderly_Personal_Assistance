// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AdminPortal from "./components/Admin/AdminPortal";
import AppointmentPage from "./components/AppointmentPage/Appointment";
import AssistantProfile from "./components/AssistantProfile/Assistant";
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="dashboard/book" element={<Dashboard />} />
        <Route path="/dashboard/appointment" element={<AppointmentPage />} />
        <Route path="/dashboard/assistant" element={<AssistantProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
