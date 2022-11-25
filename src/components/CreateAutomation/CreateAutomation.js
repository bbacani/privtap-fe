import React, {useState} from "react";
import "./CreateAutomation.css";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TriggerPlatformList from "./TriggerPlatformList";
import { useNavigate } from 'react-router-dom';
import TriggerEventList from "./TriggerEventList";
import ActionPlatformList from "./ActionPlatformList";
import ActionEventList from "./ActionEventList";
import {service} from "../../service/ApiService";

function CreateAutomation() {
    const [triggerPlatform, setTriggerPlatform] = useState();
    const [actionPlatform, setActionPlatform] = useState();
    const [triggerId, setTriggerId] = useState();
    const [actionId, setActionId] = useState();

    function handleSetTriggerPlatform(triggerPlatform) {
        setTriggerPlatform(triggerPlatform.target.value);
    }

    function handleSetActionPlatform(actionPlatform) {
        setActionPlatform(actionPlatform.target.value);
    }

    function handleSetTriggerId(triggerId) {
        setTriggerId(triggerId);
    }

    function handleSetActionId(actionId) {
        setActionId(actionId);
    }

    function onSubmit() {
        const automation = {
            name:"Name",
            description:"Description",
            triggerTypeId: triggerId,
            actionTypeId: actionId,
        }
        service().addAutomation(automation);
        navigate('/');
    }

    const navigate = useNavigate();
    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <Col md className="p-5">
                            <h1 align="center" className="mb-5">Trigger</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                    <Form.Label>Platform</Form.Label>
                                    <TriggerPlatformList onChange={handleSetTriggerPlatform} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTriggerEvent">
                                    <Form.Label>Event</Form.Label>
                                    <TriggerEventList setTriggerId={handleSetTriggerId} platform={triggerPlatform} />
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col md className="p-5">
                            <h1 align="center" className="mb-5">Action</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                    <Form.Label>Platform</Form.Label>
                                    <ActionPlatformList onChange={handleSetActionPlatform} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTriggerEvent">
                                    <Form.Label>Event</Form.Label>
                                    <ActionEventList setActionId={handleSetActionId} platform={actionPlatform} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col align="center">
                            <Button onClick={onSubmit} variant="primary" type="submit">
                                Add automation
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default CreateAutomation;