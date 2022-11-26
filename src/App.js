import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Action from "./components/Action/Action";
import Trigger from "./components/Trigger/Trigger";
import User from "./components/User/User";
import Header from "./components/common/Header/Header";
import OAuth2RedirectHandler from "./components/Login/oauth2/OAuth2RedirectHandler";
import CreateAutomation from "./components/CreateAutomation/CreateAutomation";

function App() {

    const currentUserId="637fca83e390fb1412654658";

    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path='/action' exact element={<Action/>}/>
                <Route path='/trigger' exact element={<Trigger/>}/>
                <Route path='/automations' exact element={<User/>}/>
                <Route path='/user' exact element={<User/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
                <Route path="/create-automation" element={<CreateAutomation userId={currentUserId}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
