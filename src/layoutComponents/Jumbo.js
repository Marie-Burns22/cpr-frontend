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
                    We are happy to announce that we are able to resume teaching CPR classes in early June. Class dates will be posted and available for signup by the end of the week starting May 18.

                    To keep all students and teachers safe, we will follow CDC guidelines. Please help us to keep everyone healthy by canceling or rescheduling if you are feeling sick or experiencing any symptoms that may indicate Covid-19. All surfaces that students and teachers use will be thoroughly sanitized between each class. Hand sanitizer will be provided for all students. Students are required to bring their own mask and wear it throughout the class. Please contact us using the contact button if you have any further questions or concerns.
                    {/* Due to the coronavirus outbreak, all CPR classes have been canceled. Kaiser employees have been given a 120-day extension on CPR card expiration date. All other employees need to ask their employers what policy will be enforced. To get future class dates please check back periodically at this website. We will resume classes once we are advised by health departments to do so. */}
                </h4>
            </Container>
        </Jumbotron>

    )
}

