import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function Jumbo() {
    return (
        <Container>
        <Jumbotron fluid style={{ background: "#c10000", color: "white", padding: "2em"}}  >
            <Container>
                <h1>Caldwell CPR</h1>
                <p>
                    Family Business with decades of experience offering personalized CPR courses for professionals and everyone interested in learning life saving skills.
                </p>
            </Container>
        </Jumbotron>
        </Container>
    )
}

