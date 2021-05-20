import React from "react";
import {Col} from 'react-bootstrap';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { Link } from "react-scroll";
 
const Footer = () => {
  return (
    <Col className="  " xs={12} md={12} lg={12} >
    <div className="container-fluid ">
      
        <div className="row d-flex align-items-end bg-dark footer">
          <div className="col-lg-4 col-md-6 col-sm-6 text-info ">
            <div className="d-flex">
              <p> 46325, Borken</p>
            </div>
            <div className="d-flex">
              <a href="+4915254176423" >+49 152 54176423</a>
            </div>
            <div className="d-flex">
              <p>gamzeumac49@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col text-info">
                
                <Link smooth={true} to="home" className="footer-nav  text-info" href="#">Home <span className="sr-only">(current)</span></Link>
                <br />
               
                <Link className="footer-nav text-info" smooth={true} to="about" offset={-110} >About</Link>
                <br />
                
                <Link smooth={true} to="myskills" offset={-110} className="footer-nav text-info" href="#">Skills</Link>
              </div>
              <div className="col">
                
                
                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav text-info" >Portfolio</Link>
                <br />
                {/* <a className="footer-nav">Contacts</a> */}
                <Link smooth={true} to="contact" offset={-110} className="footer-nav text-info" >Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              
              <LinkedinShareButton
                url={"www.linkedin.com/in/gamzeumac-"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              
            </div>
             <p>
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Gamze Umac | All Rights Reserved
            </p>
          </div>
          
           
        </div>
      </div>
    
    </Col>
  )
}

export default Footer;
