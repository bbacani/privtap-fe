/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./SpLogin.css";
import googleLogo from "../Login/img/google-logo.png"
import personAndComputer from "../Login/img/person-and-computer.png"
import {GOOGLE_AUTH_URL} from "../../../config/constants";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import HeaderSP from "../../common/Header/HeaderSP";

function SpLogin(props) {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "bbacani",
            password: "pass"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {

                navigate("/developers/home")
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container ">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );

    return (

        <div>
            <HeaderSP/>
            <div className="box">
                <Container>
                    <Col className="justify-content-md-center">
                        <Row>
                            <h2 align="center">
                                Login to
                            </h2>
                        </Row>
                        <Row>
                            <h1 align="center">
                                privTAP
                            </h1>
                        </Row>
                        <Row>
                            <h5 align="center" className="grey-text">
                                Log in to manage your triggers and actions.
                            </h5>
                        </Row>
                        <Row>
                            <div className="login-form">
                                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                            </div>
                        </Row>
                    </Col>
                </Container>
            </div>

        </div>
    );
}

export default SpLogin;