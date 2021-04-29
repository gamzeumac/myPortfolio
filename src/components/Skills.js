import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';




const About = () => {
    return (
        <div><h1  className="text-center"> My Skills</h1>
            
            <Container className="" >


                <Row >
                    <Col xs={12} md={6} lg={6}>  <div > <h4> Programming</h4>
                    <div className="icons" ><img src="images/html.png" alt="" /></div> 
                    <div className="icons" ><img src="images/css1.png" alt="" /></div> 
                    <div className="icons" ><img src="images/bootstrap.png" alt=""/> </div>
                    <div className="icons" ><img src="images/js.png" alt="" /> </div>
                    <div className="icons" ><img src="images/sass.png" alt="" /> </div>
                    <div>
                    <div className="icons" ><img src="images/nodejs.png" alt="" /> </div>
                    <div className="icons" ><img src="images/react.png" alt="" /> </div>
                    <div className="icons" ><img src="images/typescript.png" alt="" /> </div>
                    <div className="icons" ><img src="images/vuejs.png" alt="" /> </div>
                    <div className="icons" ><img src="images/docker.png" alt="" /> </div>
                    </div>
                    </div>

                    
                    
                    </Col>
                    <Col xs={12} md={6} lg={6}> <img className="" src=""  alt=""/>Soft
                    <div>Teamwork<ProgressBar striped variant="success" now={40} /></div> 
                    <div>Helpfulness<ProgressBar striped variant="warning" now={60} /></div> 
                    <div>Teachability<ProgressBar animated now={45} /></div> 
                    <div>Time management<ProgressBar striped variant="info" now={20} /></div> 
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} md={6} lg={6}><h4>Language</h4>
                    <div>Deutsch <ProgressBar striped variant="info" now={50} /></div>
                    <div>Englisch <ProgressBar striped variant="warning" now={40} /></div>
                    <div>Türkisch <ProgressBar striped variant="success" now={100} /></div>
                    </Col>
                    <Col xs={12} md={6} lg={6}> <h4>Other</h4> 
                    <div  className="others"><img src="images/vsc.png" alt="" /> </div>                    
                    <div className="others"><img src="images/github1.png" alt="" /></div>
                    <div className="others"><img src="images/agile.png" alt="" /> </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About