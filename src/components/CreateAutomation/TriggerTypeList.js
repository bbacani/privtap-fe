import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../service/ApiService";

export default function TriggerTypeList() {
    const [triggerTypes, setTriggerTypes] = useState();

    useEffect(() => {
            getAllTriggerTypes();
        },[]);

    const getAllTriggerTypes = async () => {
        const response = await service().getAllTriggerTypes();
        setTriggerTypes(response.data);
    }

    return (
        <Form.Select aria-label="Select the platform">
            <option>Select the platform</option>

            {triggerTypes?.map((triggerType) => {
                return (
                    <option>
                        {triggerType.name}
                    </option>
                )
            })
            }
        </Form.Select>
    )
}