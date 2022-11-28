import React, {useState} from "react";
import "./CreateAutomation.css";
import {Col, Container, Form, Row} from "react-bootstrap";
import TriggerPlatformList from "./Triggers/TriggerPlatformList";
import ActionPlatformList from "./Actions/ActionPlatformList";
import TriggerEventCards from "./Triggers/TriggerEventCards";
import ActionEventCards from "./Actions/ActionEventCards";
import Button from "react-bootstrap/Button";
import AutomationModal from "./AutomationModal";

function CreateAutomation(props) {
    const [triggerPlatform, setTriggerPlatform] = useState();
    const [actionPlatform, setActionPlatform] = useState();
    const [selectedTrigger, setSelectedTrigger] = useState();
    const [selectedAction, setSelectedAction] = useState();
    const [modalShow, setModalShow] = useState(false);
    const userId = props.userId

    function handleSetTriggerPlatform(triggerPlatform) {
        setTriggerPlatform(triggerPlatform.target.value);
    }

    function handleSetActionPlatform(actionPlatform) {
        setActionPlatform(actionPlatform.target.value);
    }

    function handleSetTrigger(trigger) {
        setSelectedTrigger(trigger);
    }

    function handleSetAction(action) {
        setSelectedAction(action);
    }

    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <Col md className="p-5">
                            <h1 align="center" className="mb-5">Trigger</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                    <Form.Label>Platforms</Form.Label>
                                    <TriggerPlatformList onChange={handleSetTriggerPlatform}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTriggerEvent">
                                    <Form.Label>Events</Form.Label>
                                    <TriggerEventCards setSelectedTrigger={handleSetTrigger}
                                                       platform={triggerPlatform}/>
                                </Form.Group>
                            </Form>
                        </Col>

                        <Col md className="p-5">
                            <h1 align="center" className="mb-5">Action</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formTriggerPlatform">
                                    <Form.Label>Platforms</Form.Label>
                                    <ActionPlatformList onChange={handleSetActionPlatform}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTriggerEvent">
                                    <Form.Label>Events</Form.Label>
                                    <ActionEventCards setSelectedAction={handleSetAction} platform={actionPlatform}/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        {selectedTrigger && selectedAction &&
                        <div>
                            <Col align="center" className="mb-3  gap-2">
                                <Button variant="primary" size="lg" type="submit" onClick={() => setModalShow(true)}>
                                    Create automation
                                </Button>
                            </Col>
                            <AutomationModal show={modalShow} onHide={() => setModalShow(false)}
                                             trigger={selectedTrigger}
                                             action={selectedAction}/>
                        </div>
                        }
                    </Row>
                </Col>
            </Container>

        </div>
    );
}

export default CreateAutomation;