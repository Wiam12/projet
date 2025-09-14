// components/Navbar.jsx
import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import { FaBell, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" style={{
      background: "linear-gradient(90deg, #f3f4f6, #e5e7eb)", // subtil dégradé clair
      color: "#1f2937",
      padding: "0.5rem 1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      borderRadius: "0 0 12px 12px"
    }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <div style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#4f46e5", // violet accent
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "22px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
          }}>C</div>
          <span style={{ fontWeight: 600, fontSize: "18px", color: "#1f2937" }}>Company Name</span>
        </Navbar.Brand>

        {/* Toggle pour mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        {/* Menu */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end align-items-center">
          <Nav className="align-items-center gap-3">
            {/* Notifications */}
            <Nav.Link href="#notifications" className="position-relative text-dark">
              <FaBell size={20} />
              <Badge pill bg="danger" style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                fontSize: "10px",
                fontWeight: "600"
              }}>3</Badge>
            </Nav.Link>

            {/* Utilisateur avec statut */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#10b981", // vert = en ligne
              }}></div>
              <NavDropdown
                title={<span className="d-flex align-items-center gap-1"><FaUserCircle /> Admin</span>}
                id="account-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#profile"><FaUserCircle className="text-primary" /> Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings"><FaCog className="text-success" /> Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout" className="text-danger"><FaSignOutAlt /> Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .nav-link, .dropdown-item {
          transition: background 0.2s, color 0.2s;
          border-radius: 8px;
        }
        .nav-link:hover, .dropdown-item:hover {
          background-color: rgba(79, 70, 229, 0.1);
          color: #1f2937 !important;
        }
        .navbar-brand span {
          letter-spacing: 0.5px;
        }
      `}</style>
    </Navbar>
  );
};

export default NavbarComponent;

