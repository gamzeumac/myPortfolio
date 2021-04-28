import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <div><h1  className="text-center"> My Skills</h1>
            
            <Container className="" >


                <Row >
                    <Col xs={12} md={6} lg={6}><img className="" src=""  alt=""/>Programming</Col>
                    <Col xs={12} md={6} lg={6}> <img className="" src=""  alt=""/>Soft</Col>
                </Row>
                <Row >
                    <Col xs={12} md={6} lg={6}><img className="" src=""  alt=""/>Language</Col>
                    <Col xs={12} md={6} lg={6}><img className="" src=""  alt=""/> Other</Col>
                </Row>
            </Container>
        </div>
    )
}

export default About