import React, {useEffect, useState} from 'react';
import "./Home.css"
import {service} from "../../service/ApiService";
import AutomationGrid from "./AutomationGrid";
import NoAutomations from "./NoAutomations";

export default function Home(props) {
    const [automations, setAutomations] = useState();
    const userId = props.userId

    useEffect(() => {
        const getAllUserAutomations = async (userId) => {
            const response = await service().getAllUserAutomations(userId);
            setAutomations(response.data);
        }
        getAllUserAutomations(props.userId);
    }, [userId]);

    return (
        <div>
            <div>
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