import React from "react";
import Typed from "react-typed";




const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info ">
        <canvas></canvas>
        <h1>Hi, Here is your Web Developer!</h1>
        <Typed
          className="typed-text "
          strings={["Frontend Development", "Web Design","Backend Development","React", "Web Development"]}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
        
      </div>
    </div>
  )
}

export default Header;
