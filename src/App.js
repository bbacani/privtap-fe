import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Action from "./components/Action/Action";
import Trigger from "./components/Trigger/Trigger";
import User from "./components/User/User";
import Header from "./components/common/Header/Header";
import OAuth2RedirectHandler from "./components/Login/oauth2/OAuth2RedirectHandler";
import CreateAutomation from "./components/CreateAutomation/CreateAutomation";
import {service} from "./service/ApiService";

function App() {

    const currentUserId = "63808fb3e390fb1412654659";

    const [user, setUser] = useState();
    useEffect(() => {
        const getCurrentUser = async () => {
            const response = await service().getUserById(currentUserId);
            setUser(response.data);
            console.log(response.data)
        }
        getCurrentUser();
    }, []);

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
                <Route path='/user' exact element={<User user={user}/>}/>
                <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
                <Route path="/create-automation" element={<CreateAutomation userId={currentUserId}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
