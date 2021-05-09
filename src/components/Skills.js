import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';




const Skills = () => {
    const renderTooltip = props => (
        <Tooltip {...props}>still learning</Tooltip>
      );

      const renderTooltip1 = props1 => (
        <Tooltip {...props1}>Visual Studio Code</Tooltip>
      );
      const renderTooltip2 = props2 => (
        <Tooltip {...props2}>Github</Tooltip>
      );
      const renderTooltip3 = props3 => (
        <Tooltip {...props3}>Scrum</Tooltip>
      );
    return (
        
        <div>

            <h1  className="text-center"> My Skills</h1>
            
            <Container className="myskills" >


                <Row >
                    <Col className="my-5 p-5" xs={12} md={6} lg={6}> <h4> Frontend</h4> <div className="icons">
                    <div><img src="images/html.png" alt="" /></div> 
                    <div><img src="images/css1.png" alt="" /></div> 
                    <div><img src="images/bootstrap.png" alt=""/> </div>
                    <div><img src="images/js.png" alt="" /> </div>
                    <div><img src="images/sass.png" alt="" /> </div>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <div><img src="images/nodejs.png" alt="" /> </div></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <div><img src="images/react.png" alt="" /> </div></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip}> 
                    <div ><img src="images/typescript.png" alt="" /> </div></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                     <div ><img src="images/vuejs.png" alt="" /> </div></OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <div ><img src="images/docker.png" alt="" /></div></OverlayTrigger>
        
                     

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
                    
                    <Col className="others my-5 p-5" xs={12} md={6} lg={6}> <h4>Othere</h4> 
                    <OverlayTrigger placement="top" overlay={renderTooltip1}> 
                    <div  ><img src="images/vsc.png" alt="" /> </div></OverlayTrigger>                    
                    <OverlayTrigger placement="top" overlay={renderTooltip2}>
                        <div ><img src="images/github1.png" alt="" /></div></OverlayTrigger> 
                        <OverlayTrigger placement="top" overlay={renderTooltip3}>
                            <div ><img src="images/agile.png" alt="" /> </div></OverlayTrigger> 
                    </Col>
               
                
                    
                   
                    </Row>
                
            </Container>
        </div>
    )
}

export default Skills