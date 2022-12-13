import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";

function Header(props) {

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <Navbar.Brand href="/home">
                    <h4 className="brand">privTAP</h4>
                </Navbar.Brand>
                {props.authenticated ?
                    <Nav>
                        <Person href="/profile" color="white" size={40}/>
                        <Nav.Link href="/profile">{props.user.username}</Nav.Link>
                        <Nav.Link className="mx-3" onClick={props.onLogout}>Logout</Nav.Link>
                    </Nav>
                    :
                    <Nav className="justify-content-end">
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );

}

export default Header;
