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
import {useNavigate, useOutletContext} from "react-router-dom";
import img from "../../../images/home-pic.png";


function HomepageSP() {
    const user = useOutletContext();

    const [platform, setPlatform] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const getPlatform = async (name) => {
            const response = await service().getPlatform(user.id);
            setPlatform(response.data);
            console.log(response.data)
        }

        if (user.platformId) {
            getPlatform().then();
        }
    }, []);


    return (
        <div>
            <HeaderSP user={user}/>

            <div>
                {!platform &&
                    <div align="start">
                        <h1 className="my-5 bottom-big-text text-uppercase">{user.email}</h1>

                        <Button variant="secondary" size="lg" type="submit" className="browse-button"
                                onClick={() => navigate('/developers/create')}>
                            REGISTER PLATFORM
                        </Button>
                    </div>}
                {platform &&
                    <Container fluid className="p-5"
                               style={{backgroundColor: platform?.color}}>
                        <Stack direction="horizontal" className="justify-content-between" >
                            <h1 className=" p-3 bottom-big-text text-uppercase">{platform?.name}</h1>
                            <h4 className="  text-uppercase">{user.email}</h4>
                        </Stack>
                        <div align="start">
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
                }
            </div>
        </div>
    );
}

export default HomepageSP;