import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class Course extends Component {
    render() {
        return (
            <Container>
                <h1>Course Title</h1>
                <h3>Course description</h3>
                <h3> Course Fee</h3>
            </Container>
        )
    }
}

export default Course