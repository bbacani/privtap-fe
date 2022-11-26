import React, {useEffect, useState} from "react";
import "../CreateAutomation.css";
import {service} from "../../../service/ApiService";
import TypeCard from "../TypeCard";
import {Button, Col, Container, Row} from "react-bootstrap";

export default function TriggerEventCards(props) {
    const [triggerTypes, setTriggerTypes] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        const getAllTriggerTypes = async () => {
            if (props.platform) {
                const response = await service().getTriggerTypesByPlatform(props.platform);
                setTriggerTypes(response.data);
            }
        }
        getAllTriggerTypes();
    }, [props.platform]);

    const activeButton = (triggerId) => {
        setActive(triggerId)
        const activeTrigger = triggerTypes?.find(trigger => trigger.id === triggerId)
        props.setSelectedTrigger(activeTrigger)
    }


    return (
        <div>
            <Container fluid className="mt-3">
                <Row xs={1} md={2} lg={2} >
                    {triggerTypes?.map((trigger) => {
                        return (
                            <Col className="mb-2">
                                <Button className="button">
                                    <TypeCard active={active} object={trigger} onChange={activeButton}/>
                                </Button>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}