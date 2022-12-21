import React from "react";
import "./SignUp.css";
import googleLogo from "../Login/img/google-logo.png"
import artist from "../Login/img/Artist.png"
import bubble from "../Login/img/chat-bubble.png"
import {GOOGLE_AUTH_URL} from "../../config/constants";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

function SignUp() {
    return (
        <div>
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
                                Register to start creating your automations today.
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
                <div className="artist-bubble">
                    <div className="chat-bubble">
                        <Image className="bubble-img" src={bubble} />
                        <div className="centered-text">
                            <center><p>Are you ready to create awesome automations?</p></center>
                        </div>
                    </div>
                    <div className="artist-div">
                        <Image className="artist" src={artist} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;