import React, {useEffect, useState} from 'react';
import {Container, Row, Stack} from "react-bootstrap";
import {ArrowRight} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import {service} from "../../service/ApiService";

function AutomationList(props) {

    const [automations, setAutomations] = useState()

    const getAllUserAutomations = async () => {
        const response = await service().getAllUserAutomations(props.userId);
        setAutomations(response.data);
    }

    useEffect(() => {
        getAllUserAutomations().then();
    });

    const handleDeleteAutomation = async (id) => {
        const request = {
            data: id
        }
        await service().deleteAutomation(props.userId, request)
        await getAllUserAutomations();
    }


    return (
        <Container fluid className="mt-3">
            {automations?.map((automation) => {
                return (
                    <Row xs={1} md={2} lg={2}>
                        <Stack direction="horizontal" className="justify-content-center mx-auto  platform-home-button" gap={3}>
                            <h5> {automation.trigger.name}</h5>
                            <ArrowRight color="purple" size={80}/>
                            <h5> {automation.action.name}</h5>
                        </Stack>
                    </Row>
                )
            })}
        </Container>
    );
}

export default AutomationList;