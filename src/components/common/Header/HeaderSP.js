import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import { useLocation } from 'react-router-dom';

function HeaderSP(props) {

    return (
        <Navbar bg="dark" variant="dark" className="header">
            <Container>

                    <Navbar.Brand href='/developers'>
                        <h4 className="brand">privTAP for developers</h4>
                    </Navbar.Brand>


                    <Nav className="justify-content-end">
                        <Nav.Link href={"/developers/login"}>Login</Nav.Link>
                    </Nav>


            </Container>
        </Navbar>
    )

}

export default HeaderSP;
