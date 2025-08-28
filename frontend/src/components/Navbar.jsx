import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 30px",
      backgroundColor: "#2563eb",
      color: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      {/* Logo + Company Name */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: "bold", fontSize: "20px", color: "#fff" }}>
        <div style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2563eb",
          fontWeight: "bold",
          fontSize: "18px"
        }}>C</div>
        <span>Company Name</span>
      </Link>

      {/* Account Dropdown */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
           onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ fontWeight: 500 }}>Account</span>
        <div style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "#f97316",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px"
        }}>U</div>

        {menuOpen && (
          <div style={{
            position: "absolute",
            top: "50px",
            right: 0,
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            overflow: "hidden",
            minWidth: "180px",
            animation: "fadeIn 0.2s ease-in-out",
          }}>
            <Link
              to="/profile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 15px",
                textDecoration: "none",
                color: "#333",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              <FaUserCircle /> Profile
            </Link>
            <Link
              to="/settings"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 15px",
                textDecoration: "none",
                color: "#333",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              <FaCog /> Settings
            </Link>
            <Link
              to="/logout"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 15px",
                textDecoration: "none",
                color: "#333",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
