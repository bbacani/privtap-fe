import './App.css';
import GoogleLogin from "react-google-login";

function App() {
    const handleFailure = (result) => {
        console.log(result);
        alert(result);
    };

    const handleLogin = (googleData) => {
        console.log(googleData);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="loginContainer">
                    <p>
                        Hello!
                    </p>
                    <div>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Log in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}
                        ></GoogleLogin>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
