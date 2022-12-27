import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import "./Scope.css";

function Scope(props) {
    const [allowed, setAllowed] = useState(false);
    const title = props.title;

    function handleClick() {
        setAllowed(!allowed);
    }

    return(
        <div className="card" onClick={handleClick}>
            <Row className="justify-content-sm-center align-items-center">
                <Col sm="auto">
                    <div className="circle m-3" style={{backgroundColor: allowed ? "#A98EE7" : "#000000"}}></div>
                </Col>
                <Col sm="auto">
                    <Row>
                        <text className="scope-title">{title}</text>
                    </Row>
                    <Row>
                        <text className="scope-state">{allowed ? "allowed" : "not allowed"}</text>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Scope;