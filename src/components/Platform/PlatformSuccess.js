import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {service} from "../../service/ApiService";


function PlatformSuccess(props) {

    const code = getUrlParameter('code');

    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    useEffect(() => {
        const getOAuthToken = async () => {
            console.log(code)
           await service().getOAuthToken("spotify", props.user.id,code)

        }
        if (props.user)
            getOAuthToken().then()
    }, []);


    return (

        <Container fluid className="p-3 my-5">

            <h1>SPOTIFY LOGIN success</h1>

        </Container>
    );
}

export default PlatformSuccess;