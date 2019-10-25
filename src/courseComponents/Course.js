import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

class Course extends Component {
    render() {
        return (
            <Container>
                <Card style={{ margin: "2em 0em 2em 0em" }}>
                    <Card.Header as="h3" style={{ background: "#bf0000", color: "#eeeeee"}}>{this.props.name}</Card.Header>
                    <Card.Body style={{ background: "#eeeeee" }}>
                        <Card.Title>Course Fee: $00</Card.Title>
                        <Card.Text text="black">
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Course