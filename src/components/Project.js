import React from 'react'
import data from "../data.json";
import "react-popupbox/dist/react-popupbox.css";
import { Container, Row, Col } from 'react-bootstrap';

const Project = () => {

  return (<>
    <h1 className="text-uppercase text-center">Portfolio</h1>
    <Container fluid>
      <Row className="justify-content-center">

        {data.projects.map((item, index) => {
          return <Col lg={3} className="m-4 justify-content-center">

            <div class="image-container">
              <img height="auto" width="100%" src={item.image} alt="images" />
              <div class="after">
                <div className="project-text">{item.name}
                <div>
                  Programming Langaugeas <ul>
                    {item.programmingLanguages.map((item, index) => {
                      return <li>{item}</li>
                    })}
                  </ul>
                <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-warning"  >Go to WebSite</a>
                <a href={item.repo} rel="noreferrer" target="_blank" className="btn btn-success"  >See in GitHub</a>
                </div></div>



              </div>
            </div>

          </Col>
        })}

      </Row>
    </Container>


  </>)
}

export default Project;
