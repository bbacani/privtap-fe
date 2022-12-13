import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../../service/ApiService";

export default function ActionPlatformList(props) {
    const [actionPlatforms, setActionPlatforms] = useState();

    useEffect(() => {
        const getAllActionPlatforms = async () => {
            const response = await service().getAllActionPlatforms();
            console.log("action"+response.data)
            setActionPlatforms(response.data);
        }
            getAllActionPlatforms();
        },[]);

    return (
        <Form.Select aria-label="Select the platform" onChange={props.onChange}>
            <option>Select the platform</option>

            {actionPlatforms?.map((actionPlatform) => {
                return (
                    <option>
                        {actionPlatform}
                    </option>
                )})
            }
        </Form.Select>
    )
}