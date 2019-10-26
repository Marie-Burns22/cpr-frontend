import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import red from '../images/red.jpg'
import Navigation from './Navigation'



export default function Jumbo() {
    return (

        <Jumbotron fluid style={{ backgroundImage: `url(${red})`, backgroundSize: 'cover'}}  >
            <Container style={{ marginBottom: "2em" }}>
                <h1>Debbie's CPR</h1>
                <h4 style={{ color: "white"}}>
                    Our family offers decades of professional experience teaching personalized CPR courses for professionals and everyone interested in learning life saving skills.
                </h4>
            </Container>
            <Navigation />
        </Jumbotron>

    )
}

