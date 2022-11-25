import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

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
                {props.trigger && props.action ? (
                    <div>
                        <p>If you want to create a new automation with trigger</p>
                        <h5> {props.trigger.name}</h5>
                        <p>and action </p>
                        <h5> {props.action.name}</h5>
                        <p>you must accept the following fields: </p>
                        <p> {props.action.requestFieldsNames.toString()}</p>
                    </div>) : (
                    <div>
                        <p>To create a new automation you must select a trigger and an action.</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                {props.trigger && props.action &&
                <Button size="lg" variant="primary" onClick={handleAcceptAutomation} >Accept</Button>
                }
                <Button size="lg" variant="secondary" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AutomationModal;