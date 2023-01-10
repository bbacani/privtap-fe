import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Scope from "./Scope";
import {useNavigate, useParams} from "react-router-dom";
import {service} from "../../service/ApiService";

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

function PlatformOAuthScopes(props) {
    const navigate = useNavigate();

    const {platform} = useParams();
    const platformName = service().getPlatformName(platform);
    const [scopes, setScopes] = useState([]);
    const pairedScopes = createPairs(scopes);
    // Boolean Array to indicate if a scope is selected or not
    const [scopesState, setScopesState] = useState([]);

    useEffect(() => {
        const getActivatedOauthScopes = async (userId, platform) => {
            const response = await service().getActivatedOauthScopes(userId, platform);
            setScopes(response.data);
            setScopesState(response.data.map(() => false))
        }
        if (props.user)
            getActivatedOauthScopes(props.user.id, platformName).then();
    }, [props.user, platformName]);

    function setScopeStateByName(name, state) {
        const i = scopes.findIndex(e => e === name);
        const newScopesState = [...scopesState];
        newScopesState[i] = state;
        setScopesState(newScopesState);
    }

    function handleConfirmButton() {
        const selectedScopes = scopes.filter((element, index) => scopesState[index]);
        service().addOAuthScopes(props.user.id, platformName, selectedScopes);
        navigate('/profile')
    }

    return(
        <div className="dark-background">
            <Container className="pt-5">
                <Col>
                    <h1 className="text-white pb-3">
                        {platformName}
                    </h1>
                    <Row>
                        <Col>
                            <p className="text-white">
                                This is a list of all the {platformName} scopes you are currently sharing with us. You are free to edit this list, but have in mind that disabling them can cause deletion of your automations. You will be warned if that’s the case.
                            </p>
                        </Col>
                        <Col> </Col>
                    </Row>
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
                    <Row>
                        <Col>
                            <Button onClick={handleConfirmButton} size="lg" className="mt-5 px-5 purpleButton">Confirm</Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default PlatformOAuthScopes;