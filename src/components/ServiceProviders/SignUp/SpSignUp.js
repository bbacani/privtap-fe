import React from "react";
import "./SpSignUp.css";
import googleLogo from "../SignUp/img/google-logo.png"
import personAndComputer from "../SignUp/img/person-and-computer.png"
import {GOOGLE_AUTH_URL} from "../../../config/constants";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import HeaderSP from "../../common/Header/HeaderSP";

function SpSignUp() {
    return (
        <div>
            <HeaderSP/>
            <div className="box">
                <Container>
                    <Col className="justify-content-md-center">
                        <Row>
                            <h2 align="center">
                                Sign up to
                            </h2>
                        </Row>
                        <Row>
                            <h1 align="center">
                                privTAP
                            </h1>
                        </Row>
                        <Row>
                            <h5 align="center" className="grey-text">
                                Sign up to start creating triggers and actions.
                            </h5>
                        </Row>
                        <Row>
                            <Button className="mt-4" href={GOOGLE_AUTH_URL} size="lg" style={{backgroundColor: '#222222'}}>
                                <Image className="googleButton" src={googleLogo} alt="Google"/>
                                Sign up with Google
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

export default SpSignUp;