import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Navigation () {
    return (
        // <Navbar variant="dark" sticky="top" style={{ background: "#ffffff" }} expand="lg">
        <Navbar sticky="top" style={{ background: "#ffffff" }} className="justify-content-between container" expand="md">
            <Navbar.Brand href="/">Debbie's CPR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" className="justify-content-center container">
                        <Nav.Link href="/"><Button style={{ background: "#8b0000", border: "none"}}>About</Button></Nav.Link>
                        <Nav.Link href="/courses"><Button style={{ background: "#8b0000", border: "none"}}>Classes</Button></Nav.Link>
                        <Nav.Link href="/contact"><Button style={{ background: "#8b0000", border: "none" }}>Contact</Button></Nav.Link>
                        <Nav.Link href="/teachers"><Button style={{ background: "#8b0000", border: "none" }}>Teachers</Button></Nav.Link>
                        <Nav.Link href="https://app.acuityscheduling.com/schedule.php?owner=18492337" target="_blank" rel="noopener noreferrer"><Button style={{ background: "#8b0000", border: "none" }}>Book a CPR Class</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
        </Navbar>
    )
}