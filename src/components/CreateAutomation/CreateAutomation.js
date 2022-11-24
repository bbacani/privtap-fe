import React from "react";
import "./CreateAutomation.css";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TriggerPlatformList from "./TriggerPlatformList";
import { useNavigate } from 'react-router-dom';

function CreateAutomation() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>New automation</h1>
            <Container>
                <Row>
                    <Col md className="m-5">
                        <h1 className="mb-5">Trigger</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                <Form.Label>Platform</Form.Label>
                                <TriggerPlatformList></TriggerPlatformList>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTriggerEvent">
                                <Form.Label>Event</Form.Label>
                                <Form.Select aria-label="Select the event">
                                    <option>Select the event</option>
                                    <option value="1">The user added a new post</option>
                                    <option value="2">The user receives a message</option>
                                    <option value="3">The user is tagged in a photo</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Text>Which data would You like to get from this trigger?</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTriggerPrivacy">
                                <Form.Check type="checkbox" label="Name" />
                                <Form.Check type="checkbox" label="Email" />
                                <Form.Check type="checkbox" label="Content of the post" />
                                <Form.Check type="checkbox" label="Location" />
                                <Form.Check type="checkbox" label="Images" />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md className="m-5">
                        <h1 className="mb-5">Action</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                <Form.Label>Platform</Form.Label>
                                <Form.Select aria-label="Select the platform">
                                    <option>Select the platform</option>
                                    <option value="1">Facebook</option>
                                    <option value="2">Twitter</option>
                                    <option value="3">Gmail</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTriggerEvent">
                                <Form.Label>Event</Form.Label>
                                <Form.Select aria-label="Select the event">
                                    <option>Select the event</option>
                                    <option value="1">Create a new post</option>
                                    <option value="2">Send a message to a contact</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Text>Which data would You like to share with this action?</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTriggerPrivacy">
                                <Form.Check type="checkbox" label="Name" />
                                <Form.Check type="checkbox" label="Email" />
                                <Form.Check type="checkbox" label="Content of the post" />
                                <Form.Check type="checkbox" label="Location" />
                                <Form.Check type="checkbox" label="Images" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Button onClick={() => navigate('/')} variant="primary" type="submit">
                    Add automation
                </Button>
            </Container>
        </div>
    );
}

export default CreateAutomation;