/* eslint-disable no-unused-vars */
import React from 'react';
import NoAutomations from "./NoAutomations";
import {Col, Container, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AutomationCard from "../common/AutomationCard";
import {ArrowRight} from "react-bootstrap-icons";

export default function AutomationGrid(props) {

    return (
        <div className="automation-list-body">
            <Stack direction="horizontal" className="justify-content-between mx-5" gap={3}>

                <Button className="home-button" variant="secondary" mar size="lg" href="/create-automation">Create new
                    automation</Button>
            </Stack>


            <Container fluid className="grid-container">
                <Row xs={2} md={4} lg={5} className="justify-content-center">
                    {props.automations?.map((automation) => {
                        if (automation.trigger !== null && automation.action !== null) {
                            return (
                                <AutomationCard automation={automation}/>

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