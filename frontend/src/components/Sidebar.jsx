import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaDatabase, FaUpload, FaDownload } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      title: "Dashboard",
      items: [{ name: "Dashboard", path: "/", icon: <FaTachometerAlt /> }],
    },
    {
      title: "Configuration",
      items: [
        { name: "Sub-Database", path: "/subdatabase", icon: <FaDatabase /> },
        { name: "Archivage Configuration **", path: "/archivage" },
        { name: "Working days calander **", path: "/working-days" },
        { name: "Theme **", path: "/theme" },
      ],
    },
    {
      title: "Data importation (Sys Huawei)",
      items: [
        { name: "SCS PO Database", path: "/scsdatabase", highlight: true, icon: <FaUpload /> },
        { name: "SCS Acceptance", path: "/scsacceptance" },
        { name: "SCS Invoice **", path: "/scsinvoice" },
      ],
    },
    {
      title: "Data Exportation",
      items: [
        { name: "Global Database", path: "/global", icon: <FaDownload /> },
        { name: "Remaining to accept", path: "/remaining" },
        { name: "SCS Invoice (Sys Huawei) **", path: "/scsinvoiceexport" },
        { name: "History Exportation", path: "/history" },
      ],
    },
  ];

  const sidebarStyle = {
    width: "320px",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "30px 25px",
    boxShadow: "2px 0 15px rgba(0,0,0,0.08)",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const sectionTitleStyle = {
    fontSize: "17px",
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: "12px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const linkStyle = (isActive, highlight) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    margin: "6px 0",
    backgroundColor: highlight
      ? "#f97316"
      : isActive
      ? "#3b82f6"
      : "#ffffff",
    color: highlight || isActive ? "#ffffff" : "#374151",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 500,
    transition: "all 0.25s ease",
    cursor: "pointer",
    boxShadow: isActive || highlight ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
  });

  return (
    <div style={sidebarStyle}>
      {menu.map((section, idx) => (
        <div key={idx} className="section">
          <h3 style={sectionTitleStyle}>{section.title}</h3>
          {section.items.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                style={linkStyle(isActive, item.highlight)}
                onMouseEnter={(e) => {
                  if (!item.highlight && !isActive) e.currentTarget.style.backgroundColor = "#e0f2fe";
                }}
                onMouseLeave={(e) => {
                  if (!item.highlight && !isActive) e.currentTarget.style.backgroundColor = "#ffffff";
                }}
              >
                {item.icon && <span style={{ fontSize: "18px" }}>{item.icon}</span>}
                {item.name}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
