import React, {useEffect, useState} from 'react';
import "./Profile.css"
import AutomationGrid from "./AutomationGrid";
import NoAutomations from "./NoAutomations";
import {service} from "../../service/ApiService";
import SubHeader from "../common/SubHeader/SubHeader";

export default function Profile(props) {
    const [automations, setAutomations] = useState();

    const getAllUserAutomations = async (userId) => {
        const response = await service().getAllUserAutomations(userId);
        setAutomations(response.data);
    }

    useEffect(() => {
        if (props.user)
            getAllUserAutomations(props.user.id).then();
    }, [props.user]);

    const handleDeleteAutomation = async (id) => {
        await service().deleteAutomation(props.user.id, id)
        await getAllUserAutomations(props.user.id).then();
    }

    return (
        <div>
            <div>
                <SubHeader authenticated={props.authenticated}/>
                <div>
                    {(() => {
                        if (automations?.length > 0) {
                            return (
                                <AutomationGrid automations={automations} user={props.user}
                                                handleDeleteAutomation={handleDeleteAutomation}/>)
                        } else {
                            return (
                                <NoAutomations/>)
                        }
                    })()}
                </div>
            </div>
        </div>
    );

}