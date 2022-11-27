import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import {ArrowRight, CheckLg, Dot} from "react-bootstrap-icons";
import {Stack} from "react-bootstrap";
import React from "react";
import {service} from "../../service/ApiService";

function AutomationModal(props) {

    const navigate = useNavigate();
    const handleAcceptAutomation = async () => {
        props.onHide()
        const automation = {
            name: props.name,
            description: props.description,
            actionTypeId: props.action.id,
            triggerTypeId: props.trigger.id,
        }
        await service().addAutomation(props.userId, automation)
        navigate(`/automations`)
    }

    const checkFieldsCount = () => {
        return props.action.requestFieldsNames.length <= props.trigger.requestFieldsNames.length
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new automation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {checkFieldsCount() ?
                    <div align="center">
                        <p>To create an automation:</p>
                        <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                            <h5> {props.trigger.name}</h5>
                            <ArrowRight color="royalblue" size={96}/>
                            <h5> {props.action.name}</h5>
                        </Stack>
                        <p>You must accept the following information:</p>
                        <ul className="check-list">
                            {props.action.requestFieldsNames.map((field) => {
                                return (
                                    <div className="check-list-item">
                                        <CheckLg color="royalblue" size={30}/>
                                        <li>{field}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    :
                    <div align="center">
                        <h3>Can't create selected automation!</h3>
                        <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                            <h5> {props.trigger.name}</h5>
                            <ArrowRight color="royalblue" size={96}/>
                            <h5> {props.action.name}</h5>
                        </Stack>
                        <h5>Information mismatch</h5>
                        <p>Selected trigger doesn't provide enough information for selected action.</p>
                        <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                            <ul className="check-list">
                                {props.trigger.requestFieldsNames.map((field) => {
                                    return (
                                        <div className="check-list-item">
                                            <Dot color="royalblue" size={30}/>
                                            <li>{field}</li>
                                        </div>
                                    )
                                })}
                            </ul>
                            <ul className="check-list">
                                {props.action.requestFieldsNames.map((field) => {
                                    return (
                                        <div className="check-list-item">
                                            <Dot color="royalblue" size={30}/>
                                            <li>{field}</li>
                                        </div>
                                    )
                                })}
                            </ul>
                        </Stack>
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                {checkFieldsCount() &&
                <Button size="lg" variant="primary" onClick={handleAcceptAutomation}>Accept</Button>}
                <Button size="lg" variant="secondary" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AutomationModal;