import React from "react";
import "./Login.css";
import googleLogo from "../Login/img/google-logo.png"

function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login</h1>
                <SampleLogin/>
            </div>
        </div>
    );
}

function SampleLogin() {
    const GOOGLE_AUTH_URL = "http://localhost:8080/oauth2/authorize/google";

    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google"/> Log in with Google
            </a>
        </div>
    );

}

export default Login;