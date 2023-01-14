import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import {useLocation} from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    const locationsWithHeader = [
        '/automations',
        '/home',
        '/explore',
        '/user',
        '/login',
        '/signup',
        '/create-automation',
        '/create-automation/scopes',
    ]
    // All the locations that starts with the string in the following Array should display the Header
    // Ex. /scopes/*
    const sublocationsWithHeader = [
        '/scopes/'
    ]
    const isSublocation = sublocationsWithHeader.map((x) => location.pathname.startsWith(x)).reduce((acc, element) => acc || element, false);
    const showHeader = locationsWithHeader.includes(location.pathname) || isSublocation;

    return showHeader && (

        <Navbar bg="dark" variant="dark" className="header">
            <Container>

                <Navbar.Brand href={props.authenticated ? '/home' : '/'}>
                    <h4 className="brand">privTAP</h4>
                </Navbar.Brand>

                {props.authenticated ?
                    <Nav>
                        <Person href="/home" color="white" size={40}/>
                        <Nav.Link href="/home">{props.user.username}</Nav.Link>
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
