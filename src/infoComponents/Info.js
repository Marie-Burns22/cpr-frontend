import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Info extends Component {
    render() {
        return (
            <div className="container">
                <Card bg="#eeeeee" style={{ margin: "2em 0em 2em 0em" }}> 
                    <Card.Header as="h3" style={{ background: "#bf0000", color: "white"}}>{this.props.title}</Card.Header>
                    <Card.Body style={{ background: "#eeeeee"}}>
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