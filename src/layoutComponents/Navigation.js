import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Navigation () {
    return (
        <Navbar style={{ background: "#bf0000", opacity: "80%", border: "1px" }} variant="dark">
            <Container>
            <Navbar.Brand href="/">Debbie's CPR</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link href="/"><Button style={{ background: "#8b0000", border: "none"}}>Home</Button></Nav.Link>
                    <Nav.Link href="/courses"><Button style={{ background: "#8b0000", border: "none"}}>Classes</Button></Nav.Link>
                    <Nav.Link href="/contact"><Button style={{ background: "#8b0000", border: "none" }}>Contact</Button></Nav.Link>
                    <Nav.Link href="/teachers"><Button style={{ background: "#8b0000", border: "none" }}>Teachers</Button></Nav.Link>
                    <Nav.Link href="https://app.acuityscheduling.com/schedule.php?owner=18492337" target="_blank" rel="noopener noreferrer" className="acuity-embed-button" style={{ background: "#8b0000", color: "#fff", padding: "8px 8px", border: "0px", "WebkitBoxShadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "MozBoxShadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "boxShadow": "0 -2px 0 rgba(0,0,0,0.15) inset", "borderRadius": "4px", "textDecoration": "none", display: "inline-block" }}>Schedule CPR Class<link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/18492337.css" id="acuity-button-styles" /><script src="https://embed.acuityscheduling.com/embed/button/18492337.js" async></script></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}