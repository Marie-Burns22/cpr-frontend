import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Info extends Component {
    render() {
        return (
            <div className="container">
                <Card bg="info" text="white" style={{ margin: "2em 0em 2em 0em" }}> 
                    <Card.Header as="h3">{this.props.title}</Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Info Card Title</Card.Title> */}
                        <Card.Text>
                            {this.props.content}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default Info;