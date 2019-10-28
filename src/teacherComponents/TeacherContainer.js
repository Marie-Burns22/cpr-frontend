import React, { Component } from 'react'
import Teacher from './Teacher'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

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
        const teacherCards = teachers.map(t => (
            <Teacher key={t.id} teacher={t.attributes} id={t.id} />
        ))

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
            return (
                <Container>
                    <CardDeck>
                        {teacherCards}
                    </CardDeck>
                </Container>
            )
        }
    }
}

export default TeacherContainer;