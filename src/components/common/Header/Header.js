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
        '/create-automation'
    ]
    const showHeader = locationsWithHeader.includes(location.pathname);
    const developers = location.pathname.startsWith("/developers");

    console.log(props.providerAuthenticated)

    return showHeader? (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                { developers ?
                    <Navbar.Brand href={props.providerAuthenticated ? '/developers/profile' : '/developers'}>
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
                {props.providerAuthenticated ?
                    <Nav>
                        <Person href="/home" color="white" size={40}/>
                        <Nav.Link href="/home">bbacani</Nav.Link>
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
