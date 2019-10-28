import React, { Component } from 'react'
import Info from './Info'
import GoogleMap from "./GoogleMap"
import Container from 'react-bootstrap/Container'

class InfoContainer extends Component {
    render() {
        return (
            <Container>
                <Info title="Cards" content="Cards will be emailed after the course" />
                <Info title="Arrival and Checkin" content="Please arrive 15 min before the start of class to sign in" />
                <GoogleMap />
            </Container>
        )
    }
}

export default InfoContainer;