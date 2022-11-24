import React, {useState} from "react";
import "./CreateAutomation.css";
import {Button, Stack} from "react-bootstrap";
import TriggerTypeList from "./TriggerTypeList";
import ActionTypeList from "./ActionTypeList";
import AutomationModal from "./AutomationModal";

function CreateAutomation() {

    const [selectedTrigger, setSelectedTrigger] = useState(null)
    const [selectedAction, setSelectedAction] = useState(null)
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <h1>New automation</h1>

            <Stack className="stack-container" direction="horizontal" gap={3}>
                <div className="automation-text "> IF</div>
                <div className="cards-container">
                    <h1>Triggers</h1>
                    <div className="cards-list">
                        <TriggerTypeList setSelectedTrigger={setSelectedTrigger}/>
                    </div>
                </div>
                <div className="automation-text">THEN</div>
                <div className="cards-container ">
                    <h1>Actions</h1>
                    <div className="cards-list">
                        <ActionTypeList setSelectedAction={setSelectedAction}/>
                    </div>
                </div>
                <div className="m-3">
                    <h3> CREATE AUTOMATION </h3>
                    <Button variant="primary" type="submit" onClick={() => setModalShow(true)}>
                        Add automation
                    </Button>
                </div>
            </Stack>

            <AutomationModal show={modalShow} onHide={() => setModalShow(false)} trigger={selectedTrigger}
                             action={selectedAction}/>
        </div>
    );
}

export default CreateAutomation;