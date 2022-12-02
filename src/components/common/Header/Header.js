import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {

    return (
        <Navbar bg="light" className="header">
            <Container>
                <Navbar.Brand href="/">
                    <h4 className="brand">privTAP</h4>
                </Navbar.Brand>

                <Nav className="justify-content-center">
                    <Nav.Link href="/create-automation">
                        <h4 className="createAutomation">Create automation</h4>
                    </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );

}

export default Header;
