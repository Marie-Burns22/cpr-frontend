import React from 'react';
import {Card, Container} from 'react-bootstrap';

export default function Scheduling() {
    return(
        <Container>
        
        <Card style={{ margin: "2em 0em 2em 0em" }}>
            <Card.Header as="h3" style={{ background: "#bf0000", color: "#eeeeee" }}>
                Book a Class
            </Card.Header>
                <Card.Body>
                    <Card.Title>Available dates are shown in bold on the calendar below.</Card.Title> 
                    <Card.Title>Click on an available date to book.</Card.Title>
                    <Card.Title>Plan to arrive 15 minutes early to register for your CPR card.</Card.Title>
                    <Card.Title>If the calendar does not appear below, click <a href="https://app.acuityscheduling.com/schedule.php?owner=18637332">here</a> to visit the scheduling page.</Card.Title>
                </Card.Body>
            <Card.Body style={{ background: "#eeeeee" }}>
            <iframe title="scheduling" src="https://app.acuityscheduling.com/schedule.php?owner=18637332" width="100%" height="800" frameBorder="0"></iframe> 
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            </Card.Body>
        </Card>
        </Container>
    )
}