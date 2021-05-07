import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button,DropdownButton, Dropdown } from 'react-bootstrap';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7974e87', 'template_7hko82f', e.target, 'user_Gs6nx0Emi4Jrc3gFs28Vm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div>
      <Form as="Col" className="d-flex flex-column p-5  mx-5">
        <Form.Group controlId="exampleForm.ControlInput1" onSubmit={sendEmail}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example multiple select</Form.Label>
          <DropdownButton id="dropdown-basic-button" title="Example multiple select">
  <Dropdown.Item href="#/action-1">I offer job for you</Dropdown.Item>
  <Dropdown.Item href="#/action-2">I need professional support for my project</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
</DropdownButton>

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </div>
  );
};

export default Contact