import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import red from '../images/red.jpg'

export default function Jumbo() {
    return (

        <Jumbotron fluid style={{ backgroundImage: `url(${red})`, backgroundSize: 'cover'}}  >
            <Container style={{ marginBottom: "2em" }}>
                <h1>Debbie's CPR</h1>
                <h4 style={{ color: "white"}}>
                    {/* Our family offers decades of professional experience teaching personalized CPR courses for professionals and everyone interested in learning life saving skills. */}
                    Due to the coronavirus outbreak, all CPR classes have been canceled. Kaiser employees have been given a 120-day extension on CPR card expiration date. All other employees need to ask their employers what policy will be enforced. To get future class dates please check back periodically at this website. We will resume classes once we are advised by health departments to do so.
                </h4>
            </Container>
        </Jumbotron>

    )
}

