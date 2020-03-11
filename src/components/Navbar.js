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

const NavbarComponent = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Logo Placeholder
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" className="nav-links">
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-links"
                href="https://github.com/reactstrap/reactstrap"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withAuth(NavbarComponent);
