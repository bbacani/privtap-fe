import React from 'react';
import {Container, Row, Stack} from "react-bootstrap";
import {ArrowRight} from "react-bootstrap-icons";

function AutomationList(props) {


    return (

        <Container fluid className="mt-3">

            {props.automations?.map((automation) => {
                return (
                    <Row xs={1} md={2} lg={2}>
                        <Stack direction="horizontal" className="justify-content-center mx-auto" gap={3}>
                            <h5> {automation.trigger.name}</h5>
                            <ArrowRight color="royalblue" size={96}/>
                            <h5> {automation.action.name}</h5>
                        </Stack>

                    </Row>
                )
            })}

        </Container>


    );
}

export default AutomationList;