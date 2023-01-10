import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import "./RegisterScopes.css"

function Scope(props) {
    const [allowed, setAllowed] = useState(true);

    function clickHandler(keyID) {
        setAllowed(!allowed);
        props.handleClickScopes(keyID)
        console.log(keyID)
    }



    return(
        <div className="card" onClick={() => clickHandler(props.scope.name)}>
            <Row className="justify-content-sm-start align-items-center">
                <Col sm="auto">
                    <div className="circle m-3" style={{backgroundColor: allowed ? "#A98EE7" : "#000000"}}></div>
                </Col>
                <Col sm="auto">
                    <Row>
                        <p className="scope-title">{props.scope.name}</p>
                    </Row>
                    <Row>
                        <p className="scope-state">{props.scope.description}</p>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Scope;