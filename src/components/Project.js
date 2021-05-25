import React from 'react'
import data from "../data.json";
import { Row, Col } from 'react-bootstrap';

const Project = () => {

  return (<>
    <Row className="justify-content-center portfolio">
      <Col xs={12} md={12} lg={12} >   <h1 className="text-uppercase text-center">Portfolio</h1></Col>
      {data.projects.map((item, index) => {
        return <Col xs={12} md={8} lg={3} className="m-4 justify-content-center">
          <div className="image-container">
            <img height="auto" width="100%" src={item.image} alt="images" />
            <div className="after">
              <div className="project-text">{item.name}
                <div>
                  Programming Langaugeas <ul>
                    {item.programmingLanguages.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                  <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-warning"  >Go to WebSite</a>
                  <a href={item.repo} rel="noreferrer" target="_blank" className="btn btn-success"  >See in GitHub</a>
                </div>
              </div>
            </div>
          </div>

        </Col>
      })}
    </Row>
  </>)
};

export default Project;
