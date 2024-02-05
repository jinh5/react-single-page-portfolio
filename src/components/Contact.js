import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import './contact.css';
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="first_name" placeholder="First Name" required/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="last_name" placeholder="Last Name" required/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name="email" placeholder="Email Address" required/>
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name="phone_number" placeholder="Phone No." />
                </Col>
                <Col>
                  <textarea row="6" name="message" placeholder="Message" required/>
                  <button type="submit" value="Send"><span>Send</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}