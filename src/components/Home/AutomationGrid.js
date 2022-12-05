import React from 'react';
import NoAutomations from "./NoAutomations";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function AutomationGrid(props) {

    return (
        <div>
            <h3 className="title">Your automations</h3>
            <Col align="center" className="mb-3  gap-2">
                <Button className="home-button" variant="secondary" size="lg" href="/create-automation">Create
                    new automation</Button>
            </Col>

            <Container fluid className="grid-container">
                <Row xs={1} md={3} lg={4} className="justify-content-center">
                    {props.automations?.map((automation) => {
                        if (automation.trigger !== null && automation.action !== null) {
                            console.log(automation.trigger)
                            return (
                                <Col align="center" className="mb-5 mx-2 grid-item" key={automation.id}
                                     style={{backgroundColor: "#" + Math.random().toString(16).substr(-6)}}>
                                    <Button className="details-button"> Details </Button>
                                    <div className="platform-button"> PLATFORM - PLATFORM</div>
                                    <div>
                                        <h4 className="cardTitle">
                                            <span className="cardWhen">WHEN</span>
                                            {automation.trigger.name}
                                            <span className="cardThen">THEN</span>
                                            {automation.action.name}
                                        </h4>
                                    </div>
                                </Col>
                            )
                        } else {
                            return (
                                <NoAutomations/>
                            )
                        }
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}