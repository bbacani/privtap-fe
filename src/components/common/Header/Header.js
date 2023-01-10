import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import { useLocation } from 'react-router-dom';

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
        '/developers/login',
        '/developers/signup',
        '/developers/create'
    ]
    // All the locations that starts with the string in the following Array should display the Header
    // Ex. /scopes/*
    const sublocationsWithHeader = [
        '/scopes/'
    ]
    const isSublocation = sublocationsWithHeader.map((x) => location.pathname.startsWith(x)).reduce((acc, element) => acc || element, false);
    const showHeader = locationsWithHeader.includes(location.pathname) || isSublocation;
    const developers = location.pathname.startsWith("/developers");

    console.log(props.providerAuthenticated)

    return showHeader? (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                { developers ?
                    <Navbar.Brand href={props.providerAuthenticated ? '/developers/home' : '/developers'}>
                        <h4 className="brand">privTAP for developers</h4>
                    </Navbar.Brand> :
                    <Navbar.Brand href={props.authenticated ? '/home' : '/'}>
                        <h4 className="brand">privTAP</h4>
                    </Navbar.Brand>
                }
                {props.authenticated ?
                    <Nav>
                        <Person href="/home" color="white" size={40}/>
                        <Nav.Link href="/home">{props.user.username}</Nav.Link>
                        <Nav.Link className="mx-3" onClick={props.onLogout}>Logout</Nav.Link>
                    </Nav>
                    :
                    <Nav className="justify-content-end">
                        <Nav.Link href={developers ? "/developers/login" : "/login"}>Login</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    ) : null;

}

export default Header;
