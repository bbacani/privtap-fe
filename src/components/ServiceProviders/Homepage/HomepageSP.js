/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";

import "./HomepageSP.css"

import SubHeader from "../../common/SubHeader/SubHeader";
import {service} from "../../../service/ApiService";
import {ArrowRight} from "react-bootstrap-icons";
import Header from "../../common/Header/Header";
import HeaderSP from "../../common/Header/HeaderSP";
import HeaderSPlogged from "../../common/Header/HeaderSPlogged";
import PlatformCardExplore from "../../Explore/PlatformCardExplore";
import RegisterScopes from "../../Platform/RegisterScopes";


function HomepageSP(props) {

    const [platform, setPlatform] = useState();

    useEffect(() => {
        const getPlatformByName = async () => {
            const response = await service().getPlatformByName('spotify');
            setPlatform(response.data);
            console.log(response.data)
        }
        getPlatformByName().then();
    }, []);

    return (
        <div>
            <HeaderSPlogged/>


            <div>

                <Container fluid style={{backgroundColor: platform?.color}}>
                    <h1 className="my-5 bottom-big-text text-uppercase">{platform?.name}</h1>
                    <div align="start" className="">
                        <Stack direction="horizontal">
                            <Stack direction="vertical" className="type-container " gap={3}>
                                <h2>{platform?.actionTypes.length} actions</h2>
                                {platform?.actionTypes?.map((action) => {
                                    return (
                                        <div className="mb-5 mx-2  type-item"
                                             style={{backgroundColor: '#222222'}}>
                                                <p className="scope-title-text">{action.name}</p>
                                                <p className="scope-state-text">{action.description}</p>

                                        </div>
                                    );
                                })}
                            </Stack>
                            <Stack direction="vertical" className="type-container " gap={3}>
                                <h2>{platform?.triggerTypes.length} triggers</h2>
                                {platform?.triggerTypes?.map((trigger) => {
                                    return (
                                        <div className="mb-5 mx-2  type-item"
                                             style={{backgroundColor: '#222222'}}>

                                                <p className="scope-title-text">{trigger.name}</p>

                                                <p className="scope-state-text">{trigger.description}</p>

                                        </div>
                                    );
                                })}
                            </Stack>
                            <Stack direction="vertical" className="right-panel " gap={3}>
                                <h3>Make triggers and actions users will love</h3>
                                <p>Nobody likes triggers that are too complex or actions that are boring :)</p>
                                <Button variant="secondary" size="lg" className="trigger-button"
                                        href="/trigger/register">
                                    Add trigger
                                </Button>
                                <Button variant="secondary" size="lg" className="trigger-button"
                                        href="/action/register">
                                    Add action
                                </Button>
                            </Stack>
                        </Stack>
                    </div>
                </Container>

            </div>
        </div>
    );
}

export default HomepageSP;