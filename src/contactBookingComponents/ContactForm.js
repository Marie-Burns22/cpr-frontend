import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import GoogleMap from '../infoComponents/GoogleMap'

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };

    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
   
    render() {
        const { status } = this.state;
        return (
            <Container>
                <Card style={{ margin: "2em 0em 2em 0em" }}>
                    <Card.Header as="h3" style={{ background: "#bf0000", color: "#eeeeee" }}>
                        Questions?

                        <br />
                        <Card.Title>Information about cards, location, and scheduling is on our Info page.</Card.Title>
                        <Card.Title>You can cancel or reschedule a class using the links in your scheduling confirmation email.</Card.Title>
                    </Card.Header>
                    
                    <Card.Body style={{ background: "#eeeeee" }}>
                        <Form onSubmit={this.submitForm} action="https://formspree.io/mdoknnkd" method="POST">
                            <Form.Group as={Row} controlId="firstName">
                                <Form.Label column sm={2}>First Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control name="First Name" type="text" placeholder="First Name" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="lastName">
                                <Form.Label column sm={2}>Last Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control name="Last Name" type="text" placeholder="Last Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="email">
                                <Form.Label column sm={2}>Email address</Form.Label>
                                <Col sm={10}>
                                    <Form.Control name="email" type="email" placeholder="name@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="Phone Number">
                                <Form.Label column sm={10}>If you would prefer us to call you, please provide your phone number:</Form.Label>
                                <Col sm={10}>
                                    <Form.Control name="phone" type="text" placeholder="123-456-7890" />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Please enter any specific questions you have here:</Form.Label>
                                <Form.Control name="Message" as="textarea" rows="3" />
                            </Form.Group>

                            
                            {status === "SUCCESS" ? <p>Thanks!</p> : <Button type="submit" style={{ background: "#bf0000", color: "white" }}>Submit</Button> }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </Form>
                    </Card.Body>
                </Card>
                <GoogleMap />
            </Container>
        )
    }
}

export default ContactForm;