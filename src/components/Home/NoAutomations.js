import React from 'react';
import {Col, Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import img from "../../images/No results found.png"

export default function NoAutomations() {

    return (
        <div>

            <Col align="center" className="mb-3  gap-2">
                <Image fluid roundedCircle src={img}/>
                <p className="sub-text">Your automation list is looking really empty...</p>
                <p className="sub-text">Try creating one!</p>
                <Button className="home-button" variant="secondary" size="lg" href="/create-automation">Create
                    new automation</Button>
            </Col>
        </div>
    )
}