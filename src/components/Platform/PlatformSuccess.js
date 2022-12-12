import React from "react";
import {Button, Container} from "react-bootstrap";
import {SPOTIFY_AUTH_URL} from "../../config/constants";
import {service} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";


function PlatformSuccess(props) {


    return (

        <Container fluid className="p-3 my-5">

            <h1>SPOTIFY LOGIN success</h1>

        </Container>
    );
}

export default PlatformSuccess;