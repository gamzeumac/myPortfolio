import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import data from "../data.json";

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
      <h1 className="text-center"> My Skills</h1>
      <Container fluid className="myskills" >
        <Row className="d-flex flex-wrap justify-content-center">
          <Col className="my-5 p-5 d-flex flex-wrap justify-content-center" xs={12} md={6} lg={6}><h4 className="w-100">Frontend</h4>
            {data.skills.map((item, index) => {
              return <div>

                {item.learning ? <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <div ><img src={item.image} alt="" /></div></OverlayTrigger>
                  : <div ><img src={item.image} alt="" /></div>}
              </div>
            })}
          </Col>
          
          <Col className="my-5 p-5 d-flex flex-wrap justify-content-center " xs={12} md={6} lg={6}><h4 className="w-100">Backend</h4>
            <div ><img src="images/mernn.png" alt="" /></div>
          </Col>
          <Col className="my-5 p-5" xs={12} md={6} lg={6}><h4 className="w-100">Language</h4>
            {data.languages.map((item, index) => {
              return <div>
                <div>{item.name1}</div>

                {item.learning}
                <div> {item.degree}</div>
              </div>

            })}
          </Col>
          <Col className="d-flex flex-wrap justify-content-center my-5 p-5 " xs={12} md={6} lg={6}><h4 className="w-100">Other</h4> 
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