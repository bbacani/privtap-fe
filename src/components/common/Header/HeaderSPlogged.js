import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import { useLocation } from 'react-router-dom';
import {ACCESS_TOKEN} from "../../../config/constants";

function HeaderSPlogged() {

    function handleLogout() {

        window.location.href = "/";
    }

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>

                    <Navbar.Brand href='/developers/home'>
                        <h4 className="brand">privTAP for developers</h4>
                    </Navbar.Brand>



                    <Nav>
                        <Person href="/home" color="white" size={40}/>
                        <Nav.Link href="/home">bbacani</Nav.Link>
                        <Nav.Link className="mx-3" onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>

            </Container>
        </Navbar>
    )

}

export default HeaderSPlogged;
