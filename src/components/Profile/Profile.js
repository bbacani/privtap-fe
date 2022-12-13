import React, {useEffect, useState} from 'react';
import "./Profile.css"
import AutomationGrid from "./AutomationGrid";
import NoAutomations from "./NoAutomations";
import {service} from "../../service/ApiService";
import SubHeader from "../common/SubHeader/SubHeader";

export default function UserAutomations(props) {

    const [automations, setAutomations] = useState();

    useEffect(() => {
        const getAllUserAutomations = async (userId) => {
            const response = await service().getAllUserAutomations(userId);
            setAutomations(response.data);
        }
        if (props.user)
            getAllUserAutomations(props.user.id).then();
    }, [props.user]);

    return (
        <div>
            <div>
                <SubHeader authenticated={props.authenticated}/>
                <div>
                    {(() => {
                        if (automations?.length > 0) {
                            return (
                                <AutomationGrid automations={automations}/>)
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