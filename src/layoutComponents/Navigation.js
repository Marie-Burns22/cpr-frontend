import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Navigation () {
    return (
        <Navbar style={{ background: "#bf0000", opacity: "80%", border: "1px" }} variant="dark">
            <Container>
            <Navbar.Brand href="#home">Debbie's CPR</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link href="#home"><Button style={{ background: "#8b0000", border: "none"}}>Home</Button></Nav.Link>
                    <Nav.Link href="#features"><Button style={{ background: "#8b0000", border: "none" }}>Contact</Button></Nav.Link>
                    <Nav.Link href="#pricing"><Button style={{ background: "#8b0000", border: "none" }}>Teachers</Button></Nav.Link>
                    <Nav.Link href="#pricing"><a href="https://app.acuityscheduling.com/schedule.php?owner=18492337" target="_blank" rel="noopener noreferrer" class="acuity-embed-button" style={{ background: "#8b0000", color: "#fff", padding: "8px 12px", border: "0px", "-webkit-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "-moz-box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "box-shadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "border-radius": "4px", "text-decoration": "none", display: "inline-block" }}>Schedule CPR Class</a><link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/18492337.css" id="acuity-button-styles" /><script src="https://embed.acuityscheduling.com/embed/button/18492337.js" async></script></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}