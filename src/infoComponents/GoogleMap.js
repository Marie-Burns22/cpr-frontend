import React, { Component } from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'

class GoogleMap extends Component {
    render() {
        return (
            <Card style={{ margin: "2em 0em 2em 0em" }}>
                <Card.Header as="h3" style={{ background: "#bf0000", color: "white" }}>Map</Card.Header>
                <Card.Body>
              <Card.Title>102 Siebe Dr, Fairfield, CA 94534</Card.Title>
                    <div style={{ width: "auto", height: 600 }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                  <embed type="image/svg+xml" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.4657735123565!2d-122.17346758501293!3d38.24550217967644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808511e0fba250c1%3A0xc241ab5e514022a9!2s102%20Siebe%20Dr%2C%20Fairfield%2C%20CA%2094534!5e0!3m2!1sen!2sus!4v1604029192055!5m2!1sen!2sus" />
                        </ResponsiveEmbed>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default GoogleMap;