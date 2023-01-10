import React from 'react';
import {Navigate} from 'react-router-dom'
import {useParams} from "react-router-dom";
import {service} from "../../service/ApiService";

function OAuth2ScopesRedirectHandler() {
    const {platform} = useParams();
    const platformName = service().getPlatformName(platform);

    const code = getUrlParameter('code');
    const error = getUrlParameter('error');


    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    if (code) {
        service().addToken(platformName, code)
        return <Navigate to="/create-automation/successful"/>
    } else {
        alert(error)
        return <Navigate to="/"/>
    }


}

export default OAuth2ScopesRedirectHandler;