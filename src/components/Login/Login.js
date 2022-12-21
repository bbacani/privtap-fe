import React from "react";
import "./Login.css";
import googleLogo from "../Login/img/google-logo.png"
import personAndComputer from "../Login/img/person-and-computer.png"
import {GOOGLE_AUTH_URL} from "../../config/constants";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

function Login() {
    return (
        <div>
            <div className="box">
                <Container>
                    <Col className="justify-content-md-center">
                        <Row>
                            <h2 align="center">
                                Sign in to
                            </h2>
                        </Row>
                        <Row>
                            <h1 align="center">
                                privTAP
                            </h1>
                        </Row>
                        <Row>
                            <h5 align="center" className="grey-text">
                                Login to find back your automations.
                            </h5>
                        </Row>
                        <Row>
                            <Button className="mt-4" href={GOOGLE_AUTH_URL} size="lg" style={{backgroundColor: '#222222'}}>
                                <Image className="googleButton" src={googleLogo} alt="Google"/>
                                Sign in with Google
                            </Button>
                        </Row>
                    </Col>
                </Container>
            </div>
            <div className="bottom-centered">
                <div>
                    <Image className="personAndComputer" src={personAndComputer}/>
                </div>
            </div>
        </div>
    );
}

export default Login;