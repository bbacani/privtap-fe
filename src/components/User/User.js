import React, {useEffect, useState} from 'react';
import {service} from "../../service/ApiService";
import AutomationList from "../Automations/AutomationsList";

function User(props) {

    const [automations, setAutomations] = useState()


    useEffect(() => {
        const getAllUserAutomations = async () => {
            const response = await service().getAllUserAutomations("637fca83e390fb1412654658");
            setAutomations(response.data);
            console.log(response.data)

        }
        getAllUserAutomations();
    }, [props.platform]);

    return (
        <div>
            <h1 align="center" className="my-5">User automations</h1>
            {automations && <AutomationList automations={automations}/>}
        </div>

    );
}

export default User;