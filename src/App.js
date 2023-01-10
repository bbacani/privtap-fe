import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from "./components/common/Header/Header";
import OAuth2RedirectHandler from "./components/Login/oauth2/OAuth2RedirectHandler";
import CreateAutomation from "./components/CreateAutomation/CreateAutomation";
import {service} from "./service/ApiService";
import SignUp from "./components/SignUp/SignUp";
import RegisterActionType from "./components/Platform/ActionType/RegisterActionType";
import RegisterTriggerType from "./components/Platform/TriggerType/RegisterTriggerType";
import {ACCESS_TOKEN} from "./config/constants";
import Login from "./components/Login/Login";
import Home from "./components/common/Home";
import SpLogin from "./components/ServiceProviders/Login/SpLogin";
import SpSignUp from "./components/ServiceProviders/SignUp/SpSignUp";
import SpLandingPage from "./components/ServiceProviders/LandingPage/SpLandingPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Homepage from "./components/Home/Homepage";
import HomepageSP from "./components/ServiceProviders/Homepage/HomepageSP";
import Explore from "./components/Explore/Explore";
import SpRegistrationForm from "./components/ServiceProviders/RegistrationForm/SpRegistrationForm";
import OAuthScopes from "./components/OAuthScopes/OAuthScopes";
import PlatformOAuthScopes from "./components/OAuthScopes/PlatformOAuthScopes";
import OAuth2ScopesRedirectHandler from "./components/OAuthScopes/OAuth2ScopesRedirectHandler";
import AutomationSuccessful from "./components/CreateAutomation/AutomationSuccessful";

function App() {
    const [user, setUser] = useState(null)
    const [authenticated, setAuthenticated] = useState(null)

    useEffect(() => {
        const getCurrentUser = async () => {
            if (!localStorage.getItem(ACCESS_TOKEN)) {
                setAuthenticated(false)
                return Promise.reject("No access token set.");
            }
            await service().getCurrentUser().then(response => {
                setUser(response.data);
                setAuthenticated(true);
                console.log("user")
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            });
        }
        getCurrentUser();
    }, []);

    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false)
        setUser(null)
        window.location.href = "/";
    }

    return (
        <BrowserRouter>
            <div>
                <Header authenticated={authenticated} user={user} onLogout={handleLogout}/>
            </div>
            <Routes>
                <Route path="/" exact element={<Home authenticated={authenticated}/>}/>
                <Route path="/home" exact element={<Homepage authenticated={authenticated} user={user}/>}/>
                <Route path="/explore" exact element={<Explore authenticated={authenticated}/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/signup" exact element={<SignUp/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler authenticated={authenticated}/>}/>
                <Route path="/automations" element={
                    <ProtectedRoute authenticated={authenticated}>
                        <Profile authenticated={authenticated} user={user}/>
                    </ProtectedRoute> }/>
                <Route path="/:platform/successfulLogin" element={<OAuth2ScopesRedirectHandler authenticated={authenticated}/>}/>
                <Route path="/create-automation/successful" element={<AutomationSuccessful/>}/>
                <Route path="/create-automation" element={
                    <ProtectedRoute authenticated={authenticated}>
                        <CreateAutomation authenticated={authenticated} user={user}/>
                    </ProtectedRoute>}/>
                <Route path='/scopes/:platform' exact element={
                    <ProtectedRoute authenticated={authenticated}>
                        <PlatformOAuthScopes authenticated={authenticated} user={user} />
                    </ProtectedRoute> }/>
                <Route path='/create-automation/scopes' exact element={
                    <ProtectedRoute authenticated={authenticated}>
                        <OAuthScopes authenticated={authenticated} user={user} />
                    </ProtectedRoute> }/>
                {/* Service Provider */}
                <Route path="/developers/login" exact element={<SpLogin/>}/>
                <Route path="/developers/signup" exact element={<SpSignUp/>}/>
                <Route path="/developers" exact element={<SpLandingPage/>}/>
                <Route path="/developers/home" exact element={<HomepageSP/>}/>
                <Route path='/action/register' exact element={<RegisterActionType/>}/>
                <Route path='/trigger/register' exact element={<RegisterTriggerType/>}/>
                <Route path='/developers/create' exact element={<SpRegistrationForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
