import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {service} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";

export default function AutomationCard(props) {
    const [platformAction, setplatformAction] = useState();
    const [platformTrigger, setplatformTrigger] = useState();

    useEffect(() => {
        const getPlatformsByName = async () => {
            const response = await service().getPlatformByName(props.automation.trigger.platformName);
            setplatformTrigger(response.data)
            const response2 = await service().getPlatformByName(props.automation.action.platformName);
            setplatformAction(response2.data)
        }
        getPlatformsByName().then();
    }, []);


    return (

        <Col align="center" className="mb-5 mx-2 grid-item" key={props.automation.id}
             style={{backgroundColor: "#424242"}}>
            <div>
                <h4 className="cardWhen">
                    <span> WHEN </span>
                    <span style={{color: platformTrigger? platformTrigger.color : "black"}}> {props.automation.trigger.name}</span>
                    <span> THEN </span>
                    <span style={{color: platformAction? platformAction.color : "black"}}>  {props.automation.action.name}</span>
                </h4>
                <Button className="details-button"
                        onClick={() => props.handleDeleteAutomation(props.automation.id)}> DELETE </Button>
            </div>
        </Col>
    )
}