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
            triggerTypePlatformName: props.trigger.platformName,
            actionTypePlatformName: props.action.platformName,
            actionTypeId: props.action.id,
            triggerTypeId: props.trigger.id,
        }
        await service().addAutomation(props.userId, automation)
        localStorage.setItem('actionPlatform', JSON.stringify(props.action.platformName));
        navigate(`/create-automation/scopes`)
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
                    <p>To create the automation:</p>
                    <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                        <h5> {props.trigger.name}</h5>
                        <ArrowRight color="purple" size={96}/>
                        <h5> {props.action.name}</h5>
                    </Stack>
                    <p>you must select the privacy preferences.</p>
                    <p>You will be redirected to the OAuth scopes page.</p>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button size="lg" variant="primary" style={{backgroundColor: '#A98EE7'}}
                        onClick={handleAcceptAutomation}>Accept</Button>
                <Button size="lg" variant="secondary" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AutomationModal;