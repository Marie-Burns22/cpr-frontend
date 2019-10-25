import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class ContactForm extends Component {
    render() {
        return (
            <Container>
                <Card bg="#eeeeee" style={{ margin: "2em 0em 2em 0em" }}>
                    <Card.Header as="h3">Contact Form</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row} controlId="firstName">
                                <Form.Label column sm={2}>First Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="lastName">
                                <Form.Label column sm={2}>Last Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="email">
                                <Form.Label column sm={2}>Email address</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId="course">
                                <Form.Label>Which courses would you like more information about?</Form.Label>
                                <Form.Control as="select">
                                    <option>CPR HeartSaver</option>
                                    <option>First Aid</option>
                                    <option>Friends and Family</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Please enter any specific questions you have here:</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default ContactForm;