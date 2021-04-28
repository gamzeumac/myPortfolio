import React from 'react'
import data from "../data.json";
import "react-popupbox/dist/react-popupbox.css";
import {Row, Col, Card, Button} from 'react-bootstrap'




const Project = () => {

    return (<>
    <h1 className="text-uppercase text-center py-5">Portfolio</h1>
      <Row>
        
  
        
 
    {data.map((item,index) => {
         return <Col lg={3} className="mb-4 p-3">
           
         <Card style={{ width: '20rem' , height:"15rem" }}><Button variant="secondary">
         <Card.Img variant="top" src="{item.image} " />
         <Card.Body>
           <Card.Title>{item.name} </Card.Title>
           <Card.Text>
           <div>
             Programming Langaugeas <ul>
               {item.programmingLanguages.map((item,index)=>{
                 return <li>{item}</li>
               })}
             </ul>
           </div>     
           </Card.Text>
            <div src={item.url} ></div>
         </Card.Body></Button>

       </Card>
       
       </Col> 
    })}

          </Row>

   </> )
}

export default Project;
