/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./SpLogin.css";
import {useForm} from 'react-hook-form';
import googleLogo from "../Login/img/google-logo.png"
import personAndComputer from "../Login/img/person-and-computer.png"
import {GOOGLE_AUTH_URL} from "../../../config/constants";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import HeaderSP from "../../common/Header/HeaderSP";
import {service} from "../../../service/ApiService";

function SpLogin() {

    const [error, setError] = useState(false)

    const {
        register,
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        var {email, pass} = data

        const request = {
            email: email,
            password: pass
        }

        await service().loginServiceProvider(request).then(response => {
            localStorage.setItem('profile', JSON.stringify(response.data));
            navigate('/developers/home')
        }).catch(error => {
            setError(true);
        });
    }

    const renderErrorMessage = () =>
        error && (
            <div className="error">Email or password is incorrect.</div>
        );

    // JSX code for login form
    const renderForm = (
        <Form key={1} onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="input-container">
                <label>Email </label>
                <Form.Control {...register("email")}
                              className="input-box"/>
            </div>
            <div className="input-container">
                <label>Password </label>
                <Form.Control {...register("pass")}
                              className="input-box"/>
            </div>
            {renderErrorMessage()}
            <div className="button-container ">
                <input type="submit" value="Login"/>
            </div>
        </Form>
    );

    return (

        <div>
            <HeaderSP/>
            <div className="box">
                <Container>
                    <Row>
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
                                <div className="login-form bottom-centered-container">
                                    {renderForm}
                                </div>
                            </Row>
                        </Col>
                        <Col sm="auto" className="d-none d-lg-block">
                            <div className="line"/>
                        </Col>
                        <Col className="ms-5 align-bottom bottom-centered-container">
                            <Image className="personAndComputer bottom-centered" src={personAndComputer}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}

export default SpLogin;