import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import "./Scope.css";

function Scope(props) {
    const [allowed, setAllowed] = useState(false);
    const title = props.title;

    function handleClick() {
        props.callback(title, !allowed);
        setAllowed(!allowed);
    }

    return(
        <div className="card" onClick={handleClick}>
            <Row className="justify-content-sm-start align-items-center">
                <Col sm="auto">
                    <div className="circle m-3" style={{backgroundColor: allowed ? "#A98EE7" : "#000000"}}></div>
                </Col>
                <Col sm="auto">
                    <Row>
                        <p className="scope-title">{title}</p>
                    </Row>
                    <Row>
                        <p className="scope-state">{allowed ? "allowed" : "not allowed"}</p>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Scope;