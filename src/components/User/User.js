import React, {useEffect, useState} from 'react';
import {service} from "../../service/ApiService";
import AutomationList from "../Automations/AutomationsList";

function User(props) {

    const [automations, setAutomations] = useState()


    useEffect(() => {
        const getAllUserAutomations = async () => {
            const response = await service().getAllUserAutomations(props.user.id);
            setAutomations(response.data);
            console.log(response.data)

        }
        getAllUserAutomations();
    }, [props.user.id]);

    return (
        <div>
            <h1 align="center" className="my-5">User info</h1>
            <h5>{props.user.username}</h5>
            <h5>{props.user.email}</h5>
            <h1 align="center" className="my-5">User automations</h1>
            {automations && <AutomationList automations={automations}/>}
        </div>

    );
}

export default User;