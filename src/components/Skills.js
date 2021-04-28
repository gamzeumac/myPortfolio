import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

import icon1 from "../images/html.png" ;


const About = () => {
    return (
        <div><h1  className="text-center"> My Skills</h1>
            
            <Container className="" >


                <Row >
                    <Col xs={12} md={6} lg={6}><img className="" src=""  alt=""/>Programming
                    <div><img src={icon1} alt="" /></div> 
                    <div><img src="https://www.iconfinder.com/icons/317756/badge_css_css3_achievement_award_reward_trophy_icon" alt="" /> </div> 
                    <div>Bootstrap<ProgressBar animated now={45} /></div> 
                    <div>JS<ProgressBar animated now={45} /></div> 
                    <div>React<ProgressBar animated now={45} /></div> 
                    <div>Express JS<ProgressBar animated now={45} /></div> 
                    <div>Gatsby<ProgressBar animated now={45} /></div> 

                    
                    
                    </Col>
                    <Col xs={12} md={6} lg={6}> <img className="" src=""  alt=""/>Soft
                    <div>Teamwork<ProgressBar striped variant="success" now={40} /></div> 
                    <div>Helpfulness<ProgressBar striped variant="warning" now={60} /></div> 
                    <div>Teachability<ProgressBar animated now={45} /></div> 
                    <div>Time management<ProgressBar striped variant="info" now={20} /></div> </Col>
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