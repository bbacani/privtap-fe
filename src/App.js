import React, {useState} from 'react';
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
                <Route path='/user' exact element={<User/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}></Route>
                <Route path="/create-automation" element={<CreateAutomation/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
