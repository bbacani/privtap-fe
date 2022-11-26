import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import {ArrowRight, CheckLg} from "react-bootstrap-icons";
import {Stack} from "react-bootstrap";
import React from "react";

function AutomationModal(props) {

    const navigate = useNavigate();
    const handleAcceptAutomation = () => {
        navigate(`/automations`)
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

                <div align="center">
                    <p>To create an automation:</p>
                    <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                        <h5> {props.trigger.name}</h5>
                        <ArrowRight color="royalblue" size={96}/>
                        <h5> {props.action.name}</h5>
                    </Stack>
                    <p>You must accept the following fields: </p>
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
            </Modal.Body>
            <Modal.Footer>

                <Button size="lg" variant="primary" onClick={handleAcceptAutomation}>Accept</Button>

                <Button size="lg" variant="secondary" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AutomationModal;