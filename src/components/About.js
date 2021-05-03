import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from "../images/me.jpg"

const About = () => {
    return (
        <div>
            
            <Container fluid className="about" >
                <Row >
                    <Col xs={12} md={10} lg={6}><img className="me" src={me} alt="me"/></Col>
                    <Col xs={12} md={10} lg={6}> 
                    <h1> @About Me</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About