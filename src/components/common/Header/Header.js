import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    PrivTap
                </Navbar.Brand>

                <Nav className="justify-content-end">
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );

}

export default Header;
