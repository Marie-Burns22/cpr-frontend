import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'

class GoogleMap extends Component {
    render() {
        return (
            <Container>
                <Card style={{ margin: "2em 0em 2em 0em" }}>
                    <Card.Header as="h3" style={{ background: "#bf0000", color: "white" }}>Class Location and Map</Card.Header>
                    <Card.Body style={{ background: "#eeeeee" }} >
                    <Card.Title>38 Via Pescara, American Canyon</Card.Title>
                    <div style={{ width: 660, height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12548.239153891991!2d-122.237891!3d38.16205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80850cf1d431f953%3A0x41db1c798798933f!2s38%20V%C3%ADa%20Pescara%2C%20American%20Canyon%2C%20CA%2094503!5e0!3m2!1sen!2sus!4v1572042317030!5m2!1sen!2sus" />
                        </ResponsiveEmbed>
                    </div>
                </Card.Body>
            </Card>


            </Container>
        )
    }
}

export default GoogleMap;