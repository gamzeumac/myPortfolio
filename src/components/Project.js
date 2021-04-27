import React from 'react'
import fruits from "../images/fruits.png";
import  "../data.json";
import "react-popupbox/dist/react-popupbox.css";

const Project = () => {
    let projects = [
      {
        name:'',
        url:'',
        type:'',
        programmingLanguages: ['React','Bootstrap','Scss']
      }
    ]
    return (
        <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
 
 {projects.map((item,index) => {
         return <div className="image-box-wrapper row justify-content-center">
            <div>Name:{item.name}</div>
            <br/>
            <div>Project Type: {item.type}</div>
          <div className="portfolio-image-box">
         <a href={item.url} target="_blank" rel="noreferrer">   <img className="portfolio-image" src={fruits} alt="Fruits Project..." /></a>
           
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
