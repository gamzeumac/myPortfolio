import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from "../images/me.jpg"

const About = () => {
    return (
        <div>
            
            <Container>
                <Row >
                    <Col xs={12} md={6} lg={6}><img className="me" src={me} alt="me"/></Col>
                    <Col xs={12} md={6} lg={6}> 
                    <h4> About Me</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About