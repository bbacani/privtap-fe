import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

export default function AutomationCard(props) {


    return (

        <Col align="center" className="mb-5 mx-2 grid-item" key={props.automation.id}
             style={{backgroundColor: "#" + Math.random().toString(16).substr(-6)}}>
            <div>
                <h4 className="cardTitle">
                    <span className="cardWhen"> WHEN </span>
                    {props.automation.trigger.name}
                    <span className="cardThen"> THEN </span>
                    {props.automation.action.name}
                </h4>
            </div>
            <div className="platform-button"> PLATFORM - PLATFORM</div>
        </Col>
    )
}