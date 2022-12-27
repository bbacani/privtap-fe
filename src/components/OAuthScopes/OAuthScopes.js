import React from 'react';
import './OAuthScopes.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Scope from "./Scope";

function createPairs(strings) {
    let pairs = [];
    //for each pair of strings in input
    for (let i = 0; i < strings.length; i += 2) {
        //create an array of pairs
        if(i+1 < strings.length) {
            pairs.push([strings[i], strings[i + 1]]);
        } else {
            pairs.push([strings[i]]);
        }
    }
    return pairs;
}

function OAuthScopes(props) {
    const platformName = "Facebook"
    const scopes = ["Reading your user info", "Reading your user info", "Posting to Your timeline", "Posting to Your timeline", "Posting to Your timeline", "Posting to Your timeline", "Posting to Your timeline"]
    const pairedScopes = createPairs(scopes);

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
                    <Col className="ms-5" sm={7}>
                        <Row>
                            <h3 className="text-white">
                                We value the privacy of your personal data
                            </h3>
                            <h4 className="text-white">
                                Tell us which scopes of data you feel okay sharing with us
                            </h4>
                            <text className="text-white my-2">
                                This is a list of all the {platformName} scopes you are currently not sharing with us. Unchecking some of them may disable the creation of this automation.
                            </text>
                            <Container fluid>
                                <Row className="justify-content-sm-start flex-nowrap overflow-auto customScrollbar">
                                    {pairedScopes.map((pairScopes) => {
                                        return(
                                            <Col sm="auto" className="p-0 ps-2">
                                                <Scope title={pairScopes[0]}></Scope>
                                                {pairScopes.length > 1 ?
                                                    <Scope title={pairScopes[1]}></Scope> :
                                                    null}
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <a href="/facebook" className="see-all">See all scopes shared with {platformName} ></a>
                        </Row>
                        <Row>
                            <Col>
                                <Button size="lg" className="mt-5 px-5 purpleButton">Confirm</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OAuthScopes;