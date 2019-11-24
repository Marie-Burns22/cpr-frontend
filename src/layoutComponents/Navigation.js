import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function Navigation () {
    return (
        // <Navbar variant="dark" sticky="top" style={{ background: "#ffffff" }} expand="lg">
        <Navbar sticky="top" style={{ background: "#ffffff" }} className="justify-content-between container" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-center container">
                        <Nav.Link href="/"><Button style={{ background: "#8b0000", border: "none"}}>Info</Button></Nav.Link>
                        <Nav.Link href="/contact"><Button style={{ background: "#8b0000", border: "none" }}>Contact</Button></Nav.Link>
                        <Nav.Link href="/teachers"><Button style={{ background: "#8b0000", border: "none" }}>Instructors</Button></Nav.Link>
                        <Nav.Link href="/courses"><Button style={{ background: "#8b0000", border: "none"}}>Private Group Courses</Button></Nav.Link>
                        <Nav.Link href="/"><Button style={{ background: "#8b0000", border: "none"}}>Book CPR BLS Course</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
        </Navbar>
    )
}