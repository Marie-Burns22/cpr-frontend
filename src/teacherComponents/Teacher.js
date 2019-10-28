import React from 'react'
import Card from 'react-bootstrap/Card'


export default function(props){
    return(
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{props.teacher.name}</Card.Title>
                <Card.Text>
                    {props.teacher.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}