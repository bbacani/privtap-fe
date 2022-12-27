import React from 'react';
import './OAuthScopes.css';
import {Col, Row} from "react-bootstrap";
import Scope from "./Scope";

function OAuthScopes(props) {
    return (
        <div className="dark-background">
            <div className="p-5">
                <Row>
                    <Col sm={4}>
                        <h1 className="text-white">
                            Almost done!
                        </h1>
                        <text className="text-white">
                            This will be your new automation once finished:
                        </text>

                        {/*TODO: Remove!*/}
                        <div style={{width: "300px", height: "300px"}}>

                        </div>

                    </Col>
                    <Col sm="auto">
                        <div className="line" />
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <h3 className="text-white">
                                We value the privacy of your personal data
                            </h3>
                            <h4 className="text-white">
                                Tell us which scopes of data you feel okay sharing with us
                            </h4>
                            <text className="text-white my-2">
                                This is a list of all the Facebook scopes you are currently not sharing with us. Unchecking some of them may disable the creation of this automation.
                            </text>
                            <Row className="justify-content-sm-start">
                                <Col sm="auto" className="p-0 ps-3">
                                    <Scope title="Reading your user info"></Scope>
                                    <Scope title="Reading your user info"></Scope>
                                </Col>
                                <Col sm="auto">
                                    <Scope title="Posting to Your timeline"></Scope>
                                    <Scope title="Posting to Your timeline"></Scope>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OAuthScopes;