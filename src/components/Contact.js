import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Col } from 'react-bootstrap';

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
        <Form onSubmit={sendEmail}>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Name" />
    </Col>
    <Col>
      <Form.Control placeholder="E-Mail" />
    </Col>
    <Col>
      <Form.Control placeholder="Message" />
    </Col>
  </Form.Row>
</Form>
            <form className="contact-form" onSubmit={sendEmail}>
               <input type="hidden" name="contact_number" />
               <label>Name</label>
               <input type="text" name="user_name" />
               <label>Email</label>
               <input type="email" name="user_email" />
               <label>Message</label>
               <textarea name="message" placeholder="message" />
               <input type="submit" value="Send" />
           </form>
           </div>
    );
};

export default Contact