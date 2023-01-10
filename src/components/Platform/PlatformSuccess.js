import React, {useEffect} from "react";
import {service} from "../../service/ApiService";
import {Navigate} from "react-router-dom";


function PlatformSuccess(props) {

    const code = getUrlParameter('code');

    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    useEffect(() => {
        console.log(props.user)
        const getOAuthToken = async () => {
            console.log("getOAuthToken " + code)
            await service().getOAuthToken(props.platform, props.user.id, code)
        }
        if (props.user)
            getOAuthToken().then()
    }, [props.user]);


    // return <Navigate to="/profile"/>
    return (
        <div>
            {props.user && <Navigate to="/home"/>}
        </div>
    )
}

export default PlatformSuccess;