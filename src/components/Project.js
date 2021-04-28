import React from 'react'
import data from "../data.json";
import "react-popupbox/dist/react-popupbox.css";




const Project = () => {

    return (
        <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
 
    {data.map((item,index) => {
         return <div className="image-box-wrapper row justify-content-center">
            <div>Name:{item.name}</div>
            <br/>
            <div>Project Type: {item.type}</div>
          <div className="portfolio-image-box">
         <a href={item.url} target="_blank" rel="noreferrer"> <img className="portfolio-image" src={item.image} width="15rem" alt="" /></a>           
           <div>
             Programming Langaugeas <ul>
               {item.programmingLanguages.map((item,index)=>{
                 return <li>{item}</li>
               })}
             </ul>
           </div>            
          </div>

          </div>
    })}
          </div>
         
          </div>

    )
}

export default Project;
