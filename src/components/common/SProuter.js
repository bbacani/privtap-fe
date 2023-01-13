import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const SProuter = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return user
        ? <Outlet context={user}/>
        : <Navigate to={'/developers/login'} replace/>;
};

export default SProuter;