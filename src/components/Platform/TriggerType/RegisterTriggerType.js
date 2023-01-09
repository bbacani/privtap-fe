import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Col, Container, Form, Row} from "react-bootstrap";


function RegisterTriggerType() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const registerTriggerType = async (triggerType) => {
        // const response = await service().registerTriggerType(triggerType);
        console.log(triggerType)
    }

    return (
        <Container className="p-5">
            <h1 align="center" className="mb-5">Register trigger</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form.Group className="mb-2">
                            <Form.Label>Platform</Form.Label>
                            <Form.Control {...register("platform")}
                                          placeholder="Insert platform name"/>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control {...register("name")}
                                          placeholder="Give a name to your new automation"/>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control {...register("description")}
                                          as="textarea" rows={3} placeholder="Describe your automation"/>
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Label>FIELDS</Form.Label>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="date"  {...register("fields")}
                                            column sm="2" type="switch" label="DATE"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="title"  {...register("fields")}
                                            column sm="2" type="switch" label="TITLE"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="content"  {...register("fields")}
                                            column sm="2" type="switch" label="CONTENT"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="image"  {...register("fields")}
                                            column sm="2" type="switch" label="IMAGE"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="description"  {...register("fields")}
                                            column sm="2" type="switch" label="DESCRIPTION"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="location"  {...register("fields")}
                                            column sm="2" type="switch" label="LOCATION"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 justify-content-center">
                            <Col>
                                <Form.Check name="fields" value="user-info"  {...register("fields")}
                                            column sm="2" type="switch" label="USER INFO"/>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Custom name"/>
                            </Col>
                        </Form.Group>
                    </Col>
                    <Button type="submit"> Register</Button>
                </Row>
            </Form>
        </Container>
    )
}

export default RegisterTriggerType;