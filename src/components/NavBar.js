import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import llogo from '../images/llogo.png';



const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home"><img className="logo" src={llogo} alt="logo..." /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">@Home</Nav.Link>
          <Nav.Link href="#About">@About</Nav.Link>          
          <Nav.Link href="#Project">@Project</Nav.Link>
          <Nav.Link href="#Skills">@Skills</Nav.Link>
          <Nav.Link href="#Contact">@Contact</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;