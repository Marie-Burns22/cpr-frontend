import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function Navigation () {
    return (
        <Container>
        <Navbar style={{ background: "#ff4949" }} variant="dark">
            <Navbar.Brand href="#home">Debbie's CPR</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Teachers</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
        </Navbar>
        </Container>
    )
}