import React from 'react';
import {Container, Row, Stack} from "react-bootstrap";
import {ArrowRight} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import {service} from "../../service/ApiService";

function AutomationList(props) {

    const handleDeleteAutomation = async (id) => {
        console.log(id)
        console.log(props.userId)
        const request={
            automation: id
        }
        console.log(request)
        await service().deleteAutomation(props.userId, request)
    }


    return (

        <Container fluid className="mt-3">

            {props.automations?.map((automation) => {
                return (
                    <Row xs={1} md={2} lg={2}>
                        <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                            <h5> {automation.trigger.name}</h5>
                            <ArrowRight color="royalblue" size={96}/>
                            <h5> {automation.action.name}</h5>
                            <Button variant="outline-primary" size="sm" type="submit"
                                    onClick={() => handleDeleteAutomation(automation.id)}>
                                DELETE
                            </Button>
                        </Stack>
                    </Row>
                )
            })}

        </Container>


    );
}

export default AutomationList;