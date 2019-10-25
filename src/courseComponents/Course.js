import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

class Course extends Component {
    render() {
        return (
            <Container>
                <Card bg="danger" text="white" style={{ margin: "2em 0em 2em 0em" }}>
                    <Card.Header as="h3">{this.props.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Course Fee: $00</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Course