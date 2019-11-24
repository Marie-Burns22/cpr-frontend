import React, { Component } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from "react-bootstrap/Card"

class TeacherContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            teachers: []
        }
    }

    componentDidMount() {
        fetch('https://dcpr.herokuapp.com/api/v1/teachers', {
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
                        teachers: result.data
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
    
    render() {
        const { error, isLoaded, teachers } = this.state;
        
        if (error) {
            return (
                <Alert variant="warning">
                    Error: {error.message}
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
        } else if (!teachers || teachers === undefined || teachers.length === 0) {
            return (
                <Alert variant="danger">
                    Please contact us using <Alert.Link href="/contact">the Contact Form</Alert.Link>for more information about our teachers.
                </Alert>
            )
        } else {
            const bridget = teachers.find(teacher => teacher.id === "1").attributes;
            const richard = teachers.find(teacher => teacher.id === "2").attributes;
            const debbie = teachers.find(teacher => teacher.id === "3").attributes;
            return (
                <Container>
                    <Card.Header as="h3" style={{ background: "#bf0000", color: "white" }}>Debbie's family has been teaching CPR since 2001. All our classes are taught by Debbie, her husband Richard, or their daughter Bridget.</Card.Header>
                    <br />
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>{debbie.name}</Card.Title>
                                <Card.Text>
                                    {debbie.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>{richard.name}</Card.Title>
                                <Card.Text>
                                    {richard.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>{bridget.name}</Card.Title>
                                <Card.Text>
                                    {bridget.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            )
        }
    }
}

export default TeacherContainer;