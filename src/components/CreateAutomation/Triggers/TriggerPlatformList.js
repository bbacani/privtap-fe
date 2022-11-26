import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../../service/ApiService";

export default function TriggerPlatformList(props) {
    const [triggerPlatforms, setTriggerPlatforms] = useState();

    useEffect(() => {
        const getAllTriggerPlatforms = async () => {
            const response = await service().getAllTriggerPlatforms();
            setTriggerPlatforms(response.data);
        }
            getAllTriggerPlatforms();
        },[]);

    return (
        <Form.Select aria-label="Select the platform" onChange={props.onChange}>
            <option>Select the platform</option>

            {triggerPlatforms?.map((triggerPlatform) => {
                return (
                    <option>
                        {triggerPlatform}
                    </option>
                )})
            }
        </Form.Select>
    )
}