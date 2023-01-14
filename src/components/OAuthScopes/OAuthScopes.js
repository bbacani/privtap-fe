import React, {useEffect, useState} from 'react';
import './OAuthScopes.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Scope from "./Scope";
import {service} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();

    const platformName = JSON.parse(localStorage.getItem('actionPlatform'));
    const [scopes, setScopes] = useState([]);
    const pairedScopes = createPairs(scopes);
    // Boolean Array to indicate if a scope is selected or not
    const [scopesState, setScopesState] = useState([]);

    useEffect(() => {
        const getMissingOauthScopes = async (userId, platform) => {
            const response = await service().getMissingOauthScopes(userId, platform);
            setScopes(response.data);
            setScopesState(response.data.map(() => false))
        }
        if (props.user)
            getMissingOauthScopes(props.user.id, platformName).then();
    }, [props.user, platformName]);

    function setScopeStateByName(name, state) {
        const i = scopes.findIndex(e => e.name === name);
        const newScopesState = [...scopesState];
        newScopesState[i] = state;
        setScopesState(newScopesState);
    }

    function handleConfirmButton() {
        const selectedScopes = scopes.filter((element, index) => scopesState[index]);

        service().addOAuthScopes(props.user.id, platformName, selectedScopes);
        navigate('/home')
    }

    return (
        <div className="dark-background">
            <div className="p-5">
                <Row>
                    <Col sm={4}>
                        <h1 className="text-white">
                            Almost done!
                        </h1>
                        <p className="text-white">
                            This will be your new automation once finished:
                        </p>

                        {/* TODO: Remove! */}
                        <div style={{width: "300px", height: "300px"}}>

                        </div>

                    </Col>
                    <Col sm="auto" className="d-none d-lg-block">
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
                            <p className="text-white my-2">
                                This is a list of all the {platformName} scopes you are currently not sharing with us. Unchecking some of them may disable the creation of this automation.
                            </p>
                            <Container fluid>
                                <Row className="justify-content-sm-start flex-nowrap overflow-auto customScrollbar">
                                    {pairedScopes.map((pairScopes) => {
                                        return(
                                            <Col sm="auto" className="p-0 ps-2" key={pairScopes[0].name}>
                                                <Scope callback={setScopeStateByName} title={pairScopes[0].name}></Scope>
                                                {pairScopes.length > 1 ?
                                                    <Scope callback={setScopeStateByName} title={pairScopes[1].name}></Scope> :
                                                    null}
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <a href={"/scopes/" + platformName} className="see-all">See all scopes shared with {platformName} ></a>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={handleConfirmButton} size="lg" className="mt-5 px-5 purpleButton">Confirm</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OAuthScopes;