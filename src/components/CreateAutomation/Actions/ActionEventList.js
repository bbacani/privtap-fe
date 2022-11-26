import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {service} from "../../../service/ApiService";

export default function ActionEventList(props) {
    const [actionTypes, setActionTypes] = useState();

    useEffect(() => {
        const getAllActionTypes = async () => {
            if(props.platform) {
                const response = await service().getActionTypesByPlatform(props.platform);
                setActionTypes(response.data);
            }
        }
        getAllActionTypes();
    }, [props.platform]);

    const updateActionId = (e) => {
        const value = e.target.value;
        const selectedAction = actionTypes.find(o => o.name === value);
        props.setActionId(selectedAction.id)
    }

    return (
        <Form.Select aria-label="Select the event" onChange={updateActionId}>
            <option>Select the event</option>

            {actionTypes?.map((actionType) => {
                return (
                    <option>
                        {actionType.name}
                    </option>
                )})
            }
        </Form.Select>
    )
}