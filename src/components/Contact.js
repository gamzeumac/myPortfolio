import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {Form, Button, DropdownButton, Dropdown, Col, Row } from 'react-bootstrap';
import sucsess from "../images/thankyou.jpg";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('serviceID', 'templateID', e.target, 'user_Gs6nx0Emi4Jrc3gFs28Vm' )
      .then(() => {
        setSuccessMessage(true );
      }, (error) => {
        console.log("error");
      });
  }
  return (
    <div>  
      {successMessage ? <img className="d-flex flex-column h-50 p-5 m-5 thankyou" src={sucsess} alt="success"/> :<Row><Col className="  " xs={12} md={12} lg={6} >
      <div className="d-flex flex-column h-50 p-5 m-5 "> <h2 className="text-center h-50 w-100 ">Contact Me</h2>
      <p className="text-center h-50 w-100 ">Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>  
      </div> </Col>
      <Col xs={12} md={12} lg={6} >
      <form as="Col"  column lg= {6}  className="d-flex flex-column p-5 contact" onSubmit={sendEmail}>
        <Form.Group controlId="exampleForm.ControlInput" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <div >
        <Form.Group  controlId="exampleForm.ControlSelect">
          <Form.Label></Form.Label>
          <DropdownButton className=" .d-none .d-md-none .d-xl-none .d-xxl-none" variant="info" id="dropdown-basic-button" title="Click Me!!">
            <Dropdown.Item href="#/action-1">I offer job for you</Dropdown.Item>
            <Dropdown.Item href="#/action-2">I need professional support for my project</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
          </DropdownButton>
        </Form.Group></div>
        <Form.Group controlId="exampleForm.ControlTextarea">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit" >
          Submit
  </Button>
      </form>
      </Col>
       </Row>}  
    </div>
  );
};

export default Contact