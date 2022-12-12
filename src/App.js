import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';

import User from "./components/User/User";
import Header from "./components/common/Header/Header";
import OAuth2RedirectHandler from "./components/Login/oauth2/OAuth2RedirectHandler";
import CreateAutomation from "./components/CreateAutomation/CreateAutomation";
import {service} from "./service/ApiService";
import Trigger from "./components/Platform/TriggerType/Trigger";
import RegisterActionType from "./components/Platform/ActionType/RegisterActionType";
import RegisterTriggerType from "./components/Platform/TriggerType/RegisterTriggerType";
import {ACCESS_TOKEN} from "./config/constants";
import Login from "./components/Login/Login";
import Home from "./components/common/Home";
import PlatformScopes from "./components/Platform/PlatformScopes";
import PlatformLogin from "./components/Platform/PlatformLogin";
import PlatformSuccess from "./components/Platform/PlatformSuccess";

function App() {
    const currentUserId = "63808fb3e390fb1412654659";

    const [user, setUser] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)


    useEffect(() => {
        const getCurrentUser = async () => {
            if (!localStorage.getItem(ACCESS_TOKEN)) {
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

    }

    return (
        <BrowserRouter>
            <div>
                <Header authenticated={authenticated} user={user} onLogout={handleLogout}/>
            </div>
            <Routes>
                <Route path="/" exact element={<Home authenticated={authenticated}/>}/>
                <Route path="/profile" element={<Profile authenticated={authenticated} user={user}/>}> </Route>
                <Route path="/login" exact element={<Login/>}/>
                <Route path='/action/register' exact element={<RegisterActionType/>}/>
                <Route path='/trigger' exact element={<Trigger/>}/>
                <Route path='/trigger/register' exact element={<RegisterTriggerType/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler authenticated={authenticated}/>}/>
                <Route path="/create-automation"
                       element={<CreateAutomation authenticated={authenticated} user={user}/>}/>
                <Route path='/user' exact element={<User userId={currentUserId}/>}/>
                <Route path="/scopes" exact element={<PlatformScopes platformName={"spotify"}/>}/>
                <Route path="/platform-login" exact element={<PlatformLogin/>}/>
                <Route path="/spotify/successfulLogin" exact element={<PlatformSuccess platform={"spotify"}  user={user}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
