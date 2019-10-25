import React, { Component } from 'react'
import Teacher from '../components/Teacher'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

class TeacherContainer extends Component {
    render() {
        return (
            <Container>
            <CardDeck >
                <Teacher name="Debbie" />
                <Teacher name="Richard" />
                <Teacher name="Bridget" />
            </CardDeck>
            </Container>
        )
    }
}

export default TeacherContainer;