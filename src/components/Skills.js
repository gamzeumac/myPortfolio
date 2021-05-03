import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';




const About = () => {
    return (
        <div><h1  className="text-center"> My Skills</h1>
            
            <Container className="myskills" >


                <Row >
                    <Col className="my-5 p-5" xs={12} md={6} lg={6}> <h4> Frontend</h4> <div className="icons">
                    <div><img src="images/html.png" alt="" /></div> 
                    <div><img src="images/css1.png" alt="" /></div> 
                    <div><img src="images/bootstrap.png" alt=""/> </div>
                    <div><img src="images/js.png" alt="" /> </div>
                    <div><img src="images/sass.png" alt="" /> </div>
                    
                    <div ><img src="images/nodejs.png" alt="" /> </div>
                    <div ><img src="images/react.png" alt="" /> </div>
                    <div ><img src="images/typescript.png" alt="" /> </div>
                    <div ><img src="images/vuejs.png" alt="" /> </div>
                    <div ><img src="images/docker.png" alt="" /> </div>
                    </div> 
                    </Col>
                    <Col className="my-5 p-5"  xs={12} md={6} lg={6}><h4>Language</h4>
                    <div>Deutsch <ProgressBar striped variant="info" now={50} /></div>
                    <div>Englisch <ProgressBar striped variant="warning" now={40} /></div>
                    <div>Türkisch <ProgressBar striped variant="success" now={100} /></div>
                    </Col>

                   
                    <Col className="my-5 p-5" xs={12} md={6} lg={6}> <h4>Backend</h4> 
                    <div className="mern"><img src="images/mern.png" alt=""/></div>
                
                    
                    </Col>
                    
                    <Col className="others my-5 p-5" xs={12} md={6} lg={6}> <h4>Other</h4> 
                    <div  ><img src="images/vsc.png" alt="" /> </div>                    
                    <div ><img src="images/github1.png" alt="" /></div>
                    <div ><img src="images/agile.png" alt="" /> </div>
                    </Col>
               
                
                    
                   
                    </Row>
                
            </Container>
        </div>
    )
}

export default About