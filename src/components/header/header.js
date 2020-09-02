import React, { useState } from 'react';
import './header.css';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="warning" light expand="md" className="navbar">
          <NavbarBrand href="/" className="title">Ultimos 5 games terminados</NavbarBrand>
        </Navbar>
      </div>
    );
  }
  
  export default Headers;