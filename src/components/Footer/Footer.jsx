import React from "react";
import { NavItem, Nav, Navbar, NavLink, Row, Col } from "reactstrap";
function Footer() {
  return (
    <Navbar className="navbar-dark bg-dark fixed-bottom fluxFooter">
      <Nav>
        <NavItem>
          <NavLink href="/main">
            <i className="bi bi-house"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/categories">
            <i className="bi bi-grid-3x3-gap"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/main/panier">
            <i className="bi bi-cart3"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="bi bi-person-square"></i>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Footer;
