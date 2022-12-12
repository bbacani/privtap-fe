import React from "react";
import {Button, Container} from "react-bootstrap";
import {SPOTIFY_AUTH_URL} from "../../config/constants";
import {service} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";


function PlatformLogin(props) {

    const navigate = useNavigate();
    const getPlatformLogin = async () => {
        const response= await service().getPlatformLogin();

        console.log(response.data)
        window.location.href=response.data
    }




    return (

        <Container fluid className="p-3 my-5">

            <h1>SPOTIFY LOGIN</h1>

            <Button onClick={getPlatformLogin} className="  w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                Log in to Spotify
            </Button>

        </Container>
    );
}

export default PlatformLogin;