import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { logout, isLoggedIn } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          Logo PlaceHolder
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to={"/"} id="home-btn">
                <h4>Home</h4>
              </Link>
            </NavItem>
            <NavItem>
              {isLoggedIn ? (
                <>
                  <Link to="/profile">Profile</Link>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="navbar-button">Login</button>{" "}
                  </Link>
                  <br />
                  <Link to="/signup">
                    <button className="navbar-button">Sign Up</button>
                  </Link>
                </>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withAuth(NavbarComponent);
