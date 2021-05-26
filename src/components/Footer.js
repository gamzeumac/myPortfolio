import React from "react";
import { Link } from "react-scroll";
import { Col, Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Col xs={12} md={12} lg={12} >       
      <Navbar bg="dark" expand="lg">
      <div className="row text-center text-white">
          <p>
            Copyright&copy;
              {new Date().getFullYear()}&nbsp;Gamze Umac | All Rights Reserved
            </p></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto ">
            <li className="nav-item active ">
              <Link to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link" >About</Link>
            </li>

            <li className="nav-item">
              <Link to="portfolio" className="nav-link" >Project</Link>
            </li>
            <li className="nav-item">
              <Link to="myskills" className="nav-link" >Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" >Contacts</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
         </Navbar>
      
      
    </Col>
  )
};
export default Footer;
