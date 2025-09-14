// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarAzira from "./components/Sidebar";
import NavbarComponent from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SubDatabase from "./pages/SubDatabase";
import SCSDatabase from "./pages/SCSDatabase";
import SCSAcceptance from "./pages/SCSAcceptance";
import WorkingDaysCalendar from "./pages/WorkingDaysCalendar";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <SidebarAzira />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <NavbarComponent />
          <div style={{ padding: "20px", background: "#f9fafb", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/subdatabase/*" element={<SubDatabase />} />
              <Route path="/scsdatabase" element={<SCSDatabase />} />
              <Route path="/scsacceptance" element={<SCSAcceptance />} />
              <Route path="/working-days" element={<WorkingDaysCalendar />} />
      
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;


