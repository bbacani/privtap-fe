import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import {ACCESS_TOKEN} from "../../../config/constants";

function HeaderSP(props) {

    function onLogout() {
        localStorage.removeItem('profile');
        window.location.href = "/developers";
    }

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>
                <Navbar.Brand href={props.user ? '/developers/home' : '/developers'}>
                    <h4 className="brand">privTAP for developers</h4>
                </Navbar.Brand>
                {props.user ?
                    <Nav>
                        <Person href="/developers/home" color="white" size={40}/>
                        <Nav.Link href="/developers/home">{props.user.email}</Nav.Link>
                        <Nav.Link className="mx-3" onClick={onLogout}>Logout</Nav.Link>
                    </Nav>
                    :

                    <Nav className="justify-content-end">
                        <Nav.Link href={"/developers/login"}>Login</Nav.Link>
                    </Nav>

                }
            </Container>
        </Navbar>
    )

}

export default HeaderSP;
