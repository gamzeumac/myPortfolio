import React from 'react';

import llogo from '../images/llogo.png';
import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">

      <a className="navbar-brand" href="#"><img className="logo" src={llogo} alt="logo..." /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="home" className="nav-link" href="#">@Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="about" offset={-110} className="nav-link" >@About</Link>
          </li>

          <li className="nav-item">
            <Link to="portfolio" offset={-110} className="nav-link" >@Project</Link>
          </li>
          <li className="nav-item">
            <Link to="myskills" offset={-110} className="nav-link" href="#">@Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" offset={-110} className="nav-link" >@Contacts</Link>
          </li>

        </ul>

      </div>

    </div>
  </nav>
  )
}
export default NavBar;