import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import llogo from '../images/llogo.png';
import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">   
<Navbar.Brand href="#home"><img className="logo" src={llogo} alt="logo..." /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
     
      <Nav className="ml-auto ">
          <li className="nav-item active ">
            <Link to="home" className="nav-link" href="#">@Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="about"  className="nav-link" >@About</Link>
          </li>

          <li className="nav-item">
            <Link to="portfolio"  className="nav-link" >@Project</Link>
          </li>
          <li className="nav-item">
            <Link to="myskills" className="nav-link" >@Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link" >@Contacts</Link>
          </li>

        </Nav>
</Navbar.Collapse>
    

    
  </Navbar>
  )
}
export default NavBar;