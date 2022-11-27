import React, {useEffect, useState} from 'react';
import {service} from "../../service/ApiService";
import AutomationList from "../Automations/AutomationsList";

function User(props) {

    const [automations, setAutomations] = useState()


    useEffect(() => {
        const getAllUserAutomations = async () => {
            const response = await service().getAllUserAutomations("63808fb3e390fb1412654659");
            setAutomations(response.data);
        }
        getAllUserAutomations();
    }, []);

    return (
        <div>
            {props.user &&
            <div>
                <h1 align="center" className="my-5">User info</h1>
                <h5>{props.user.username}</h5>
                <h5>{props.user.email}</h5>
            </div>
            }
            <div>
                <h1 align="center" className="my-5">User automations</h1>
                {automations && <AutomationList userId={props.user.id} automations={automations}/>}
            </div>
        </div>
    );
}

export default User;