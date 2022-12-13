import React, {useState} from "react";
import "./CreateAutomation.css";
import {Col, Container, Form, Image, Row} from "react-bootstrap";
import TriggerPlatformList from "./Triggers/TriggerPlatformList";
import ActionPlatformList from "./Actions/ActionPlatformList";
import TriggerEventCards from "./Triggers/TriggerEventCards";
import ActionEventCards from "./Actions/ActionEventCards";
import Button from "react-bootstrap/Button";
import AutomationModal from "./AutomationModal";
import img from "../../images/Social media marketing in mobile online.png";

function CreateAutomation(props) {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [triggerPlatform, setTriggerPlatform] = useState();
    const [actionPlatform, setActionPlatform] = useState();
    const [selectedTrigger, setSelectedTrigger] = useState();
    const [selectedAction, setSelectedAction] = useState();
    const [modalShow, setModalShow] = useState(false);

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
            <div className="upper-container">

                <div className="upper-container-text">
                    <h1 align="start" className="mb-5">Use Your imagination and create something unique </h1>
                    <h4>We also have ready to use automations. Feel free to browse them and add them to Your
                        automation list!</h4>
                </div>
                <Image fluid className="create-automation-image" src={img}/>

            </div>
            <Container className="p-5">
                <h1>New automation</h1>
                <body> Choose 2 platforms. Select a trigger from the first one. Also select the action from the second one. Then create automation. </body>

                <Row>
                    <Col md className="p-5">
                        <h3 align="center" className="mb-5">Trigger</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Platforms</Form.Label>
                                <TriggerPlatformList onChange={handleSetTriggerPlatform}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Events</Form.Label>
                                <TriggerEventCards setSelectedTrigger={handleSetTrigger}
                                                   platform={triggerPlatform}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md className="p-5">
                        <h3 align="center" className="mb-5">Action</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Platforms</Form.Label>
                                <ActionPlatformList onChange={handleSetActionPlatform}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
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
                                         name={name}
                                         description={description}
                                         trigger={selectedTrigger}
                                         action={selectedAction}
                                         userId={props.user?.id}/>
                    </div>
                    }
                </Row>
            </Container>
        </div>
    );

}

export default CreateAutomation;