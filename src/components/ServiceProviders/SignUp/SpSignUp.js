import React from "react";
import "./SpSignUp.css";
import googleLogo from "../SignUp/img/google-logo.png"
import personAndComputer from "../SignUp/img/person-and-computer.png"
import {GOOGLE_AUTH_URL} from "../../../config/constants";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import HeaderSP from "../../common/Header/HeaderSP";
import {useForm} from "react-hook-form";
import {service} from "../../../service/ApiService";
import {useNavigate} from "react-router-dom";

function SpSignUp() {


    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        var {email, pass} = data

        const request = {
            email: email,
            password: pass
        }

        await service().registerServiceProvider(request).then(response => {
            localStorage.setItem('profile', JSON.stringify(response.data));
            navigate('/developers/home')
        }).catch(error => {
            console.log(error)
        });
    }

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
            <div className="button-container ">
                <input type="submit" value="Sign up"/>
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
                                <div className="login-form bottom-centered-container">
                                    {renderForm}
                                </div>
                            </Row>
                        </Col>
                        <Col sm="auto" className="d-none d-lg-block">
                            <div className="line"/>
                        </Col>
                        <Col className="ms-5 align-bottom bottom-centered-container">
                            <Image className=" bottom-centered personAndComputer" src={personAndComputer}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}

export default SpSignUp;