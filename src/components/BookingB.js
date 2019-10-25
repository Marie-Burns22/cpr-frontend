import React, { Component } from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'

class BookingB extends Component {
    render() {
        return (
            <Card bg="secondary" text="white" style={{ margin: `2em` }}>
                <Card.Header as="h3">Booking Example Time Tap - Professional</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div style={{ width: "100%", height: "800" }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed type="image/svg+xml" src='https://www.timetap.com/emb/309510' />
                            </ResponsiveEmbed>
                        </div>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default BookingB;