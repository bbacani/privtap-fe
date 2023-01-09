import React from 'react';
import {Navigate} from 'react-router-dom'
import {ACCESS_TOKEN} from "../../../config/constants";

function OAuth2RedirectHandler() {

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');


    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(window.location.href);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to="/home"/>
    } else {
        alert(error)
        return <Navigate to="/login"/>
    }


}

export default OAuth2RedirectHandler;