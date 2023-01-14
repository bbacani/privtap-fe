import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {service} from "../../../service/ApiService";
import TypeCard from "../TypeCard";

export default function ActionPlatformList(props) {
    const [actionPlatforms, setActionPlatforms] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        const getAllActionPlatforms = async () => {
            const response = await service().getAllActionPlatforms();
            setActionPlatforms(response.data);
        }
            getAllActionPlatforms();
        },[]);

    const activeButton = (platform) => {
        setActive(platform)
        props.setActionPlatform(platform)
    }

    return (
        <div>
            <Container fluid className="mt-3">
                <Row xs={1} md={2} lg={2} className=" flex-nowrap overflow-auto customScrollbar">
                    {actionPlatforms?.map((actionPlatform) => {
                        return (
                            <Col className="mb-2">
                                <Button className="button-choice" variant="secondary" >
                                    <TypeCard active={active} platform={actionPlatform} onChange={activeButton}/>
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