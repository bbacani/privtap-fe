import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import {useNavigate} from "react-router-dom";


function Home(props) {
    const navigate = useNavigate();
    if (props.authenticated) {
        navigate('/home')
    }
    return (
        <LandingPage />
    );
}

export default Home;