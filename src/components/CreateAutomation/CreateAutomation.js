import React, {useState} from "react";
import "./CreateAutomation.css";
import {Col, Container, Form, Image, Row, Stack} from "react-bootstrap";
import TriggerPlatformList from "./Triggers/TriggerPlatformList";
import ActionPlatformList from "./Actions/ActionPlatformList";
import TriggerEventCards from "./Triggers/TriggerEventCards";
import ActionEventCards from "./Actions/ActionEventCards";
import Button from "react-bootstrap/Button";
import AutomationModal from "./AutomationModal";
import img from "../../images/Social media marketing in mobile online.png";
import SubHeader from "../common/SubHeader/SubHeader";
import PlatformCard from "../common/PlatformCard";
import {ArrowDown, ArrowDownShort, ArrowDownSquare, ArrowRight} from "react-bootstrap-icons";

function CreateAutomation(props) {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [triggerPlatform, setTriggerPlatform] = useState();
    const [actionPlatform, setActionPlatform] = useState();
    const [selectedTrigger, setSelectedTrigger] = useState();
    const [selectedAction, setSelectedAction] = useState();
    const [modalShow, setModalShow] = useState(false);

    function handleSetTriggerPlatform(triggerPlatform) {
        setTriggerPlatform(triggerPlatform);
    }

    function handleSetActionPlatform(actionPlatform) {
        setActionPlatform(actionPlatform);
    }

    function handleSetTrigger(trigger) {
        setSelectedTrigger(trigger);
    }

    function handleSetAction(action) {
        setSelectedAction(action);
    }

    return (
        <div>
            <SubHeader authenticated={props.authenticated}/>
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
                <body> Choose 2 platforms. Select a trigger from the first one. Also select the action from the second
                one. Then create automation.
                </body>
                <Row>
                    <Col md className="pt-5">
                        <h3>Trigger platforms</h3>
                    </Col>
                    <Col md className="pt-5">
                        <h3>Action platforms</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md className="platform-col">
                        <TriggerPlatformList setTriggerPlatform={handleSetTriggerPlatform}/>
                    </Col>
                    <Col md className="platform-col">
                        <ActionPlatformList setActionPlatform={handleSetActionPlatform}/>
                    </Col>
                </Row>
            </Container>
            {(triggerPlatform || actionPlatform) &&
                <div className="types-row">
                    <Container className="p-5">

                        <Row>
                            {triggerPlatform &&
                                < Col md className="p-5">
                                    <h5>Triggers</h5>
                                </Col>
                            }
                            {actionPlatform &&
                                < Col md className="p-5">
                                    <h5>Actions</h5>
                                </Col>
                            }
                        </Row>
                        <Row>
                            {triggerPlatform &&
                            <Col md className="platform-col-secondary">
                                <TriggerEventCards setSelectedTrigger={handleSetTrigger} platform={triggerPlatform}/>
                            </Col>
                            }
                            {actionPlatform &&
                            <Col md className="platform-col-secondary">
                                <ActionEventCards setSelectedAction={handleSetAction} platform={actionPlatform}/>
                            </Col>
                            }
                        </Row>

                        <Row>
                            {selectedTrigger && selectedAction &&
                                <div>
                                    <Col align="center" className="mb-3  gap-2">
                                        <Button variant="secondary" size="lg" type="submit" className="browse-button"
                                                onClick={() => setModalShow(true)}>
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
            }
        </div>
    );

}

export default CreateAutomation;