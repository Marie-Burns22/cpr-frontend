import React, { Component } from 'react'
import Teacher from '../components/Teacher'
import CardDeck from 'react-bootstrap/CardDeck'

class TeacherContainer extends Component {
    render() {
        return (
            <CardDeck>
                <Teacher name="Debbie" />
                <Teacher name="Richard" />
                <Teacher name="Bridget" />
            </CardDeck>
        )
    }
}

export default TeacherContainer;