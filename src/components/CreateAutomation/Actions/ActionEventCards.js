import React, {useEffect, useState} from "react";
import "../CreateAutomation.css";
import {service} from "../../../service/ApiService";
import {Button, Col, Container, Row} from "react-bootstrap";
import TypeCard from "../TypeCard";

export default function ActionEventCards(props) {
    const [actionTypes, setActionTypes] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        const getAllActionTypes = async () => {
            if (props.platform) {
                const response = await service().getActionTypesByPlatform(props.platform);
                setActionTypes(response.data);
            }
        }
        getAllActionTypes();
    }, [props.platform]);

    const activeButton = (actionId) => {
        setActive(actionId)
        const activeAction = actionTypes?.find(action => action.id === actionId)
        props.setSelectedAction(activeAction)
    }


    return (
        <div>
            <Container fluid className="mt-3">
                <Row xs={1} md={2} lg={2}>
                    {actionTypes?.map((action) => {
                        return (
                            <Col className="mb-2">
                                <Button className="button">
                                    <TypeCard active={active} object={action} onChange={activeButton}/>
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