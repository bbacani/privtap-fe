import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../service/ApiService";

export default function TriggerPlatformList() {
    const [triggerPlatforms, setTriggerPlatforms] = useState();

    useEffect(() => {
            getAllTriggerPlatforms();
        },[]);

    const getAllTriggerPlatforms = async () => {
        const response = await service().getAllTriggerPlatforms();
        setTriggerPlatforms(response.data);
    }

    return (
        <Form.Select aria-label="Select the platform">
            <option>Select the platform</option>

            {triggerPlatforms?.map((triggerPlatform) => {
                return (
                    <option>
                        {triggerPlatform}
                    </option>
                )
            })
            }
        </Form.Select>
    )
}