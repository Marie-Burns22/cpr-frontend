import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export default function(props) {
    const fee = props.course.fee ? `Course Fee: $${props.course.fee}` : <Link to="/contact"><Button style={{ background: "#8b0000", border: "none" }}>Contact for fee information</Button></Link>
    return (
        <Container>
            <Card style={{ margin: "2em 0em 2em 0em" }}>
                <Card.Header as="h3" style={{ background: "#bf0000", color: "#eeeeee"}}>{props.course.title}</Card.Header>
                <Card.Body style={{ background: "#eeeeee" }}>
                    <Card.Title> {fee} </Card.Title>
                    <Card.Text text="black">
                        {props.course.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}