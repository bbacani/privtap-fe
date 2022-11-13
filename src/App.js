import './App.css';
import { axios } from './ApiService'
import React, { useEffect } from 'react';

function App() {
    // GET with Axios
    useEffect(() => {
       const fetch = async () => {
          await axios.get('/')
       };
       fetch();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hello!
                </p>
            </header>
        </div>
    );
}

export default App;
