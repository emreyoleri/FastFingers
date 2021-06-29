import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar
        dark
        style={{ backgroundColor: "#333" }}
        className="p-3 rounded-2 mb-2"
      >
        <h2
          style={{ color: "white", cursor: "pointer" }}
          onClick={toggleNavbar}
        >
          Yazı Testi
        </h2>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem onClick={toggleNavbar}>
              <Link exact className="nav-link" to="/">
                Ana sayfa
              </Link>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <Link className="nav-link" to="/challenges">
                Metinler
              </Link>
            </NavItem>
            <NavItem onClick={toggleNavbar}>
              <Link className="nav-link" to="/results">
                Sonuçlarım
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/*  */}
    </div>
  );
};

export default NavbarComponent;
