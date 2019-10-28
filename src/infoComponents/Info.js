import React from 'react'
import Card from 'react-bootstrap/Card'

export default function(props) {
    return (
        <Card bg="#eeeeee" style={{ margin: "2em 0em 2em 0em" }}> 
            <Card.Header as="h3" style={{ background: "#bf0000", color: "white"}}>{props.info.title}</Card.Header>
            <Card.Body style={{ background: "#eeeeee"}}>
                <Card.Text>
                    {props.info.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
