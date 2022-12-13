import {Col} from "react-bootstrap";
import React from "react";
import "../Profile/Profile.css"
export default function PlatformCard(props) {


    return (

        <Col align="center" className="mb-5 mx-2 grid-item"
             style={{backgroundColor: "#" + Math.random().toString(16).substr(-6)}}>
            <div>
                <h4 className="cardTitle">
                    {props.name}
                </h4>
            </div>
            <div className="platform-button"> 2 automations</div>
        </Col>
    )
}