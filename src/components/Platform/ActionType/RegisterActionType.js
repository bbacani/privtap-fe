/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button, Col, Form, Row} from "react-bootstrap";
import HeaderSPlogged from "../../common/Header/HeaderSPlogged";
import {service} from "../../../service/ApiService";
import "../RegisterType.css"
import RegisterScopes from "../RegisterScopes";
import {useNavigate} from "react-router-dom";

function RegisterActionType() {

    const [scopes, setScopes] = useState([]);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
    } = useForm();

    const {
        register: register2,
        formState: {errors: errors2},
        handleSubmit: handleSubmit2,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data) => {

        const request = {
            platformName: data.platformName,
            name: data.name,
            description: data.description,
            url:data.url,
            oauthScopes: scopes
        }
        console.log(request)
        await service().registerActionType(data.platformName, request);
        navigate('/developers/home')
    };

    const onSubmitScope = (data) => {
        const scope = {
            name: data.name,
            description: data.description
        }
        setScopes([...scopes, scope])
    };

    const handleClickScopes = (scopeName) => {
        setScopes(scopes.filter(item => item.name !== scopeName))
    }
    
    return (
        <div>
            <HeaderSPlogged/>
            <div className="dark-background">
                <div className="p-5">

                    <Row>

                        <Col sm={4}>
                            <Form key={1} onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="text-white">
                                    Creating actions has never been easier
                                </h1>
                                <p className="text-white">
                                    Enter info about your action below
                                </p>
                                <Form.Group className="mb-2">
                                    <Form.Label>Platform</Form.Label>
                                    <Form.Control {...register("platformName")}
                                                  placeholder="Insert platform name"
                                                  className="input-box"/>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control {...register("name")}
                                                  placeholder="Give a name to your new action"
                                                  className="input-box"/>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control {...register("description")}
                                                  as="textarea" rows={3} placeholder="Describe your action"
                                                  className="input-box"/>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>URL endpoint</Form.Label>
                                    <Form.Control {...register("url")}
                                                  className="input-box"/>
                                </Form.Group>
                                <Button type="submit" size="lg" className="mt-5 px-5 purpleButton"> Register</Button>
                            </Form>
                        </Col>

                        <Col sm="auto" className="d-none d-lg-block">
                            <div className="line"/>
                        </Col>
                        <Col className="ms-5" sm={7}>
                            <Row>
                                <h3>
                                    Tell us which scopes of data will be shared with PrivTAP
                                </h3>
                                <p className=" my-2">
                                    Please, try to keep scopes to minimal set (those necessary for actions to function)
                                </p>
                            </Row>
                            <Row>

                                <Form key={2} onSubmit={handleSubmit2(onSubmitScope)}>
                                    <Form.Group as={Row} className="mb-3 justify-content-center">
                                        <Col>
                                            <Form.Label>Scope name</Form.Label>
                                            <Form.Control type="text" placeholder="Name..." className="input-box p-3"
                                                          {...register2("name")}/>
                                            <Form.Label>Scope description</Form.Label>
                                            <Form.Control type="text" placeholder="Description..."
                                                          className="input-box p-3"
                                                          {...register2("description")}/>
                                            <Button type="submit" size="sm" className="mt-4 px-5 purpleButton"> Add
                                                scope</Button>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row className="justify-content-sm-start flex-nowrap overflow-auto customScrollbar">
                                {scopes?.map((scope) => {
                                    return (
                                        <Col sm="auto" className="p-0 ps-2" key={scope.name}>
                                            <RegisterScopes handleClickScopes={handleClickScopes}
                                                            scope={scope}></RegisterScopes>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>


                    </Row>

                </div>
            </div>
        </div>

    )
}

export default RegisterActionType;