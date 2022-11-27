import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../../service/ApiService";

export default function TriggerEventList(props) {
    const [triggerTypes, setTriggerTypes] = useState();

    useEffect(() => {
        const getAllTriggerTypes = async () => {
            if (props.platform) {
                const response = await service().getTriggerTypesByPlatform(props.platform);
                setTriggerTypes(response.data);
            }
        }
        getAllTriggerTypes();
    }, [props.platform]);

    const updateTriggerId = (e) => {
        const value = e.target.value;
        const selectedTrigger = triggerTypes.find(o => o.name === value);
        props.setTriggerId(selectedTrigger.id)
    }

    return (
        <Form.Select aria-label="Select the event" onChange={updateTriggerId}>
            <option>Select the event</option>

            {triggerTypes?.map((triggerType) => {
                return (
                    <option>
                        {triggerType.name}
                    </option>
                )})
            }
        </Form.Select>
    )
}