import React from "react";
import "./SubHeader.css";
import {Container, Stack} from "react-bootstrap";

function SubHeader(props) {

    return (

        <Container className="container">

            {props.authenticated ?
                <Stack direction="horizontal" className="m-3 justify-content-center">

                    <h2>Home</h2>
                    <h2>Automations</h2>
                    <h2>Platforms</h2>
                    <h2>Our mission</h2>

                </Stack>
                :
                <Stack direction="horizontal" className="m-3 justify-content-center">

                    <h2>Home</h2>
                    <h2>Explore</h2>

                    <h2>Our mission</h2>

                </Stack>
            }
        </Container>

    );

}

export default SubHeader;
