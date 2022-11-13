import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Action from "./components/Action/Action";
import Trigger from "./components/Trigger/Trigger";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/login"/>
                <Route path='/action' exact element={<Action/>}/>
                <Route path='/trigger' exact element={<Trigger/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
