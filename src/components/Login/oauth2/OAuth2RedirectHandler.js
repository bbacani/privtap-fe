import React from 'react';
import {Navigate} from 'react-router-dom'

function OAuth2RedirectHandler() {


    return (
        <Navigate to="/user"/>
    );


}

export default OAuth2RedirectHandler;