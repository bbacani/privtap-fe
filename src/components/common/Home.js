import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import {useNavigate} from "react-router-dom";


function Home(props) {
    const navigate = useNavigate();
    if (props.authenticated) {
        navigate('/profile')
    }
    return (
        <LandingPage />
    );
}

export default Home;