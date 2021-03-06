import React, { Component } from 'react'
import Course from './Course'
import Alert from 'react-bootstrap/Alert'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

class CourseContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            courses: []
        }
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

    render() {
        const { error, isLoaded, courses } = this.state;
        const courseCards = courses.map(c => (
            <Course key={c.id} course={c.attributes} id={c.id} />
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
        } else if (!courses || courses === undefined || courses.length === 0) {
            return (
                <Alert variant="danger">
                    Please contact us using <Alert.Link href="/contact">the Contact Form</Alert.Link>for more information regarding available courses.
                </Alert>
            )
        } else {
            return (
                <div>
                    {courseCards}
                </div>
            )
        }
    }
}

export default CourseContainer;