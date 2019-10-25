import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class BookingA extends Component {
    render() {
        return (
            <Container>
            <Card bg="info" text="white">
                <Card.Header as="h3">Booking Acuity - Free Account</Card.Header>
                <Card.Body>
                    <Card.Title>Booking button, embed did not work.</Card.Title>
                    <Card.Text>
                        <a href="https://app.acuityscheduling.com/schedule.php?owner=18492337" target="_blank" rel="noopener noreferrer" class="acuity-embed-button" style={{ background: "#5fb8b9", color: "#fff", padding: "8px 12px", border: "0px", "-webkit-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "-moz-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "border-radius": "4px", "text-decoration": "none", display: "inline-block" }}>Schedule Appointment</a><link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/18492337.css" id="acuity-button-styles" /><script src="https://embed.acuityscheduling.com/embed/button/18492337.js" async></script>

                    </Card.Text>
                </Card.Body>
            </Card>  
            </Container>
        )
    }
}

export default BookingA;