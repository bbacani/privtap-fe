/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {service} from "../../../service/ApiService";
import TypeCard from "../TypeCard";
import PlatformCardExplore from "../../Explore/PlatformCardExplore";

export default function TriggerPlatformList(props) {
    const [triggerPlatforms, setTriggerPlatforms] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        const getAllTriggerPlatforms = async () => {
            const response = await service().getAllTriggerPlatforms();
            setTriggerPlatforms(response.data);
        }
        getAllTriggerPlatforms();
    }, []);

    const activeButton = (platform) => {
        setActive(platform)
        props.setTriggerPlatform(platform)
    }

    return (
        <div>
            <Container fluid className="mt-3">
                <Row xs={1} md={2} lg={2} className=" flex-nowrap overflow-auto customScrollbar">
                    {triggerPlatforms?.map((triggerPlatform) => {
                        return (
                            <Col>
                                <Button className="button-choice" variant="secondary">
                                    <TypeCard active={active} platform={triggerPlatform} onChange={activeButton}/>
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