import React from "react";
import "./Login.css";
import googleLogo from "../Login/img/google-logo.png"
import {GOOGLE_AUTH_URL} from "../../config/constants";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

function Login() {
    return (
        <Container fluid className="p-3 my-5">

            <Row>

                <Col col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </Col>

                <Col col='4' md='6'>
                    <div className='d-flex flex-row mt-2'>
                        <span className="h1 fw-bold mb-0">PrivTap</span>
                    </div>

                    <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                    <Button href={GOOGLE_AUTH_URL} className="  w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                        <Image  fluid src={googleLogo} alt="Google"/>
                        Log in with Google
                    </Button>

                </Col>

            </Row>

        </Container>
    );
}

export default Login;