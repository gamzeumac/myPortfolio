import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';

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
      <h2 className="text-center">Contact Me</h2>
      <form as="Col" className="d-flex flex-column h-50 p-5 mx-5 contact" onSubmit={sendEmail}>
       <Form.Group controlId="exampleForm.ControlInput" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect">
          <Form.Label>Example multiple select</Form.Label>
          <DropdownButton variant="info" id="dropdown-basic-button" title="Example multiple select">
            <Dropdown.Item href="#/action-1">I offer job for you</Dropdown.Item>
            <Dropdown.Item href="#/action-2">I need professional support for my project</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
          </DropdownButton>

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group> 
        
        <Button variant="info" type="submit" >
          Submit
  </Button>
      </form>
    </div>
  );
};

export default Contact