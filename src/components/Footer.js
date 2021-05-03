import React from "react";
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
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> 46325, Borken</p>
            </div>
            <div className="d-flex">
              <a href="tel:+4917621987385">+49 152 54176423</a>
            </div>
            <div className="d-flex">
              <p>gamzeumac49@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                {/* <a className="footer-nav">Home</a> */}
                <Link smooth={true} to="home" className="footer-nav" href="#">Home <span className="sr-only">(current)</span></Link>
                <br />
                {/* <a className="footer-nav">About me</a> */}
                <Link className="footer-nav" smooth={true} to="about" offset={-110} >About</Link>
                <br />
                {/* <a className="footer-nav">Services</a> */}
                <Link smooth={true} to="services" offset={-110} className="footer-nav" href="#">Skills</Link>
              </div>
              <div className="col">
                
                {/* <a className="footer-nav">Portfolio</a> */}
                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" >Portfolio</Link>
                <br />
                {/* <a className="footer-nav">Contacts</a> */}
                <Link smooth={true} to="contacts" offset={-110} className="footer-nav" >Contacts</Link>
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
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Gamze Umac | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
