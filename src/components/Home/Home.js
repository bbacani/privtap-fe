import React, {useEffect, useState} from 'react';
import "./Home.css"
import {service} from "../../service/ApiService";

export default function Home(props) {
    const [automations, setAutomations] = useState();
    const userId = props.userId

    useEffect(() => {
        const getAllAutomations = async (userId) => {
            const response = await service().getAllAutomations(userId);
            setAutomations(response.data);
        }
        getAllAutomations(props.userId);
    },[userId]);

    const emptyStateMessage = () => {
        return (
            <h4>There are no automations. Create a new one!</h4>
        )
    }

    return (
        <div>
            <div>
                <h3 className="title">Your automations</h3>

                <div>
                    {(() => {
                        if (automations?.length > 0) {
                            return (
                                <div className="grid-container">
                                    {automations?.map((automation) => {
                                        if(automation.trigger !== null && automation.action !== null) {
                                            return (
                                                <div key={automation} className="grid-item">
                                                    <div>
                                                        <h4 className="cardTitle">
                                                            <span className="cardWhenThen">WHEN </span>
                                                            {automation.trigger.name} <br/>
                                                            <span className="cardWhenThen"> THEN </span>
                                                            {automation.action.name}
                                                        </h4>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                           emptyStateMessage()
                                        }
                                        })
                                    }
                                </div>
                            )
                        }  else {
                            emptyStateMessage()
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}