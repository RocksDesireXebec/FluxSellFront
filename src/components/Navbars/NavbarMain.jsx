import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";

import logo from "../../assets/img/mode.png";
import { useStateValue } from "../../StateProvider/StateProvider";
import { useJwt } from "react-jwt";

const NavbarMain = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [token, setToken] = useState({});

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const { decodedToken, isExpired } = useJwt(token);

  return (
    <>
      <Navbar color="light" expand="md" light className="fixed-top">
        <i className="bi bi-list" onClick={toggle}></i>
        <img
          alt="..."
          className="img-circle img-no-padding img-responsive logonavbar"
          src={logo}
        />
        <Offcanvas scrollable toggle={toggle} isOpen={modal}>
          <OffcanvasHeader toggle={toggle}>
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src={logo}
            />
            FluxSell
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav vertical>
              <NavItem>
                <NavLink href="/main/categories">Catégories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/main/panier">Panier {basket?.length}</NavLink>
              </NavItem>
              <NavbarText>
                {token?.length > 0 && `Bienvenue : ${decodedToken?.email}`}
              </NavbarText>
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
      {/**
        <Navbar color="light" expand="md" light>
        <i class="bi bi-list" onClick={toggle}></i>
        <Offcanvas scrollable toggle={toggle} isOpen={modal}>
          <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
          <OffcanvasBody>
            <Nav vertical>
              <NavItem>
                <NavLink href="/main/categories">Catégories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/main/panier">Panier {basket?.length}</NavLink>
              </NavItem>
              <NavbarText>
                {token?.length > 0 && `Bienvenue : ${decodedToken?.email}`}
              </NavbarText>
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
     */}
    </>
  );
};

export default NavbarMain;
