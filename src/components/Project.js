import React from 'react'
import fruits from "../images/fruits.png";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Project = () => {
    const openPopupboxFruits = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox"src={fruits} alt="Fruits Project..." />
        <p></p>
        <div className='links'>
          <b className='demo'>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://gamzeumac.github.io/Fruitspage/", "_blank")}>https://gamzeumac.github.io/Fruitspage/</a>
          <br />
          <b className='demo'>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/gamzeumac/Fruitspage")}>https://github.com/gamzeumac/Fruitspage</a>
        </div>
      </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigFruits = {
        titleBar: {
          enable: true,
          text: "Fruits Project....."
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    



    return (
        <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFruits}>
            <img className="portfolio-image" src={fruits} alt="Fruits Project..." />
            <div className="overflow"></div>
            
          </div>
          </div>
          </div>
          <PopupboxContainer {...popupboxConfigFruits} />
          </div>

    )
}

export default Project;
