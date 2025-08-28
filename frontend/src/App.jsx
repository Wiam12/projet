import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // import correct
import Dashboard from "../pages/Dashboard";
import SubDatabase from "../pages/SubDatabase";
import SCSDatabase from "../pages/SCSDatabase";
import SCSAcceptance from "../pages/SCSAcceptance";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar à gauche */}
        <Sidebar />

        {/* Contenu principal */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Navbar en haut */}
          <Navbar />

          {/* Zone des pages */}
          <div style={{ flex: 1, padding: "20px", backgroundColor: "#f3f4f6" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/subdatabase" element={<SubDatabase />} />
              <Route path="/scsdatabase" element={<SCSDatabase />} />
              <Route path="/scsacceptance" element={<SCSAcceptance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
