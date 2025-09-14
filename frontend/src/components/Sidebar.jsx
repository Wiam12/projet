// components/SidebarAzira.jsx
import React, { useState } from "react";
import { Nav, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { 
  FaTachometerAlt, FaDatabase, FaUpload, FaDownload, 
  FaChevronDown, FaChevronUp, FaUserCircle, FaFileInvoiceDollar, FaHistory 
} from "react-icons/fa";

const SidebarAzira = () => {
  const location = useLocation();
  const [collapsedSections, setCollapsedSections] = useState({});
  const [isMini, setIsMini] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSection = (title) => {
    setCollapsedSections({ ...collapsedSections, [title]: !collapsedSections[title] });
  };

  const toggleSubMenu = (name) => {
    setOpenMenus({ ...openMenus, [name]: !openMenus[name] });
  };

  const toggleSidebar = () => setIsMini(!isMini);

  const menu = [
    { 
      title: "Dashboard", 
      color: "#4f46e5",
      items: [
        { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> }
      ]
    },
    { 
      title: "Configuration", 
      color: "#f59e0b",
      items: [
        { 
          name: "Sub-Database", 
          icon: <FaDatabase />,
          subItems: [
            { name: "Account - Project Name", tab: "account" },
            { name: "Category - Item", tab: "category" },
            { name: "Acceptance Term", tab: "acceptance" }
          ]
        },
        { name: "Working Days Calendar", path: "/working-days" },
        { name: "Theme", path: "/theme" },
      ]
    },
    { 
      title: "Data Importation", 
      color: "#10b981",
      items: [
        { name: "SCS PO Database", path: "/scsdatabase", icon: <FaUpload />, badge: 5 },
        { name: "SCS Acceptance", path: "/scsacceptance" },
        { name: "SCS Invoice", path: "/scsinvoice", icon: <FaFileInvoiceDollar /> },
      ]
    },
    { 
      title: "Data Exportation", 
      color: "#ef4444",
      items: [
        { name: "Global Database", path: "/global", icon: <FaDownload /> },
        { name: "Remaining to Accept", path: "/remaining", icon: <FaDownload /> },
        { name: "SCS Invoice (Sys Huawei)", path: "/scsinvoice-huawei", icon: <FaFileInvoiceDollar /> },
        { name: "History Exportation", path: "/history-export", icon: <FaHistory /> },
      ]
    },
  ];

  // Styles centralisés
  const sidebarStyles = {
    container: {
      width: isMini ? "80px" : "300px",
      transition: "width 0.3s",
      overflowY: "auto",
      height: "100vh",
      background: "#f8f9fa",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
    },
    miniProfile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      borderBottom: "1px solid #ddd",
    },
    profileInfo: { display: "flex", alignItems: "center", gap: "12px" },
    profileText: { fontSize: "14px", color: "#6b7280" },
    sectionTitle: (color, collapsed) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 14px",
      fontWeight: 600,
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "6px",
      color: color,
      background: collapsed ? `${color}20` : "transparent",
      transition: "all 0.2s",
    }),
    itemLink: (color, active) => ({
      color: color,
      fontWeight: active ? "bold" : "normal",
      fontSize: "14px",
      padding: "8px 12px",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: active ? `${color}30` : "transparent",
      textDecoration: "none",
    }),
    badge: { fontSize: "0.8rem", padding: "0.3rem 0.5rem" },
    subItem: { marginLeft: "16px", paddingLeft: "4px" },
  };

  return (
    <div style={sidebarStyles.container}>
      {/* Mini-profile */}
      <div style={sidebarStyles.miniProfile}>
        {!isMini && (
          <div style={sidebarStyles.profileInfo}>
            <FaUserCircle size={36} color="#4f46e5" />
            <div>
              <div style={{ fontWeight: 600 }}>Admin</div>
              <div style={sidebarStyles.profileText}>Company</div>
            </div>
          </div>
        )}
        <button onClick={toggleSidebar} className="btn btn-sm btn-outline-secondary" style={{ minWidth: "35px", fontSize: "16px", fontWeight: "bold" }}>
          {isMini ? "»" : "«"}
        </button>
      </div>

      {/* Menu */}
      <div style={{ flexGrow: 1, padding: "8px" }}>
        {menu.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "12px" }}>
            {/* Section Title */}
            <div
              onClick={() => toggleSection(section.title)}
              style={sidebarStyles.sectionTitle(section.color, collapsedSections[section.title])}
            >
              <span>{!isMini && section.title}</span>
              {!isMini && (collapsedSections[section.title] ? <FaChevronUp /> : <FaChevronDown />)}
            </div>

            {/* Section Items */}
            {!collapsedSections[section.title] && (
              <Nav className="flex-column" style={{ marginTop: "4px" }}>
                {section.items.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <>
                        <div
                          onClick={() => toggleSubMenu(item.name)}
                          style={{ ...sidebarStyles.itemLink(section.color), cursor: "pointer" }}
                        >
                          {item.icon && <span>{item.icon}</span>}
                          {!isMini && <span>{item.name}</span>}
                          {!isMini && (openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />)}
                        </div>
                        {openMenus[item.name] && !isMini && (
                          <Nav className="flex-column ms-3">
                            {item.subItems.map((sub, i) => (
                              <Nav.Item key={i} className="mb-1" style={sidebarStyles.subItem}>
                                <Nav.Link
                                  as={Link}
                                  to="/subdatabase"
                                  state={{ tab: sub.tab }}
                                  style={sidebarStyles.itemLink(section.color, location.state?.tab === sub.tab)}
                                >
                                  {sub.name}
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        )}
                      </>
                    ) : (
                      <Nav.Item className="mb-1">
                        <Nav.Link
                          as={Link}
                          to={item.path}
                          style={sidebarStyles.itemLink(section.color, location.pathname === item.path)}
                        >
                          {item.icon && <span>{item.icon}</span>}
                          {!isMini && <span>{item.name}</span>}
                          {item.badge && !isMini && <Badge bg="danger" style={sidebarStyles.badge}>{item.badge}</Badge>}
                        </Nav.Link>
                      </Nav.Item>
                    )}
                  </div>
                ))}
              </Nav>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarAzira;


