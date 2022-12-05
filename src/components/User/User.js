import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import AutomationList from "../Automations/AutomationsList";

function User(props) {

    let navigate = useNavigate();
    return (
        <div>
            {props.userId &&
            <div align="center" >
                <h1 className="my-5">User info</h1>
                <div align="start">
                    <h5>{props.userId}</h5>
                </div>
                <h1 className="my-5">User automations</h1>
                <AutomationList userId={props.userId}/>
                <Button variant="primary" className="m-3"
                        onClick={() => navigate(`/create-automation`)}>
                    CREATE AUTOMATION
                </Button>
            </div>
            }
        </div>
    );
}

export default User;