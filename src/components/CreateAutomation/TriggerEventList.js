import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../service/ApiService";

export default function TriggerEventList() {
    const [triggerTypes, setTriggerTypes] = useState();

    useEffect(() => {
        getAllTriggerTypes();
    },[]);

    const getAllTriggerTypes = async () => {
        const response = await service().getTriggerTypesByPlatform();
        setTriggerTypes(response.data);
    }

    return (
        <Form.Select aria-label="Select the platform">
            <option>Select the platform</option>
            console.log(triggerType.description)
            {triggerTypes?.map((triggerType) => {
                return (
                    <option>
                        {triggerType.description}
                    </option>
                )
            })
            }
        </Form.Select>
    )
}