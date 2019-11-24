import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import GoogleMap from '../infoComponents/GoogleMap'
import Alert from 'react-bootstrap/Alert'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Spinner from 'react-bootstrap/Spinner'

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            courses: [],
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://dcpr.herokuapp.com/api/v1/courses', {
            method: 'GET',    
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                }
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        courses: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
        const { status, error, isLoaded, courses } = this.state;
        if (error) {
            return (
                <Alert variant="warning">
                    Error: {error.message}
                </Alert>
            )
        } else if (status === "SUCCESS") {
            return (
                <Alert variant="danger">
                    Thank you for contacting us! We will respond soon.
                </Alert>
            )

        } else if (!isLoaded) {
            return (
                <Alert variant="danger">
                    <ButtonToolbar>
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                        </Button>
                        <Button variant="danger" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                            </Button>
                    </ButtonToolbar>
                </Alert>
            )
        } else {
            return (
                <Container>
                    <Card style={{ margin: "2em 0em 2em 0em" }}>
                        <Card.Header as="h3" style={{ background: "#bf0000", color: "#eeeeee" }}>Request Information about Private Group Courses</Card.Header>
                        <Card.Body style={{ background: "#eeeeee" }}>
                                <Form onSubmit={this.submitForm} action="https://formspree.io/mbjlrrjg" method="POST">
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

                                <Form.Group controlId="course">
                                    <Form.Label>Which courses would you like more information about?</Form.Label>
                                    <Form.Control name="Class Interest" as="select" placeholder="Which class are you interested in?">
                                        <option selected>Select a Class</option>
                                        {courses.map(c => 
                                            (
                                                <option key={c.id}>{c.attributes.title}</option>
                                            ))
                                        }

                                    </Form.Control>
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
}

export default ContactForm;