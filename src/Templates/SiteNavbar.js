import React from "react"
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../assets/css/Global.css"


const SiteNavbar = () => {

    return (
            <>
                <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" className="navigation">
                    <Container>
                        <Navbar.Brand as={Link} to="/websiteportfolio">Chanverzosa1998</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="links">
                                <Nav.Link as={Link}  eventKey="1"  to="/websiteportfolio">Home</Nav.Link>
                                <Nav.Link as={Link}  eventKey="2"  to="/experience">Experience</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    )
}

export default SiteNavbar