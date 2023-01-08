import React, {useEffect, useState} from "react";
import {Button, Container, Image, Row, Stack} from "react-bootstrap";
import SubHeader from "../common/SubHeader/SubHeader";
import "./Homepage.css"
import {service} from "../../service/ApiService";
import img from "../../images/home-pic.png"
import img2 from "../../images/home-pic-2.png"
import PlatformCard from "../common/PlatformCard";
import AutomationList from "../Automations/AutomationsList";


function Homepage(props) {

    const [platforms, setPlatforms] = useState();


        const getPlatformNames = async () => {
            const response = await service().getPlatformNames();
            setPlatforms(response.data);
            console.log("platforme" + response.data)
        }



    return (
        <div>
            <SubHeader authenticated={props.authenticated}/>

            <div>
                {props.user?.id &&
                <Container fluid>
                    <div align="start" className="user-container">
                        <h1 className="my-5 bottom-big-text text-uppercase">{props.user.username}</h1>
                        <Button variant="secondary" size="lg" className="platform-home-button"
                        onClick={getPlatformNames}>
                            See used platform
                        </Button>
                        <Image fluid className="home-image" src={img}/>
                    </div>
                    {platforms &&
                    <div className="platform-list-body">
                        <h3> Platforms used</h3>
                        <Container fluid className="grid-container">
                            <Row xs={2} md={4} lg={5} className="justify-content-start">
                                {platforms?.map((platform) => {
                                    return (
                                        <PlatformCard name={platform}/>
                                    )
                                })}
                            </Row>
                        </Container>
                        <h3> List of automations</h3>
                        <AutomationList userId={props.user.id}/>
                    </div>
                    }
                    <div className="home-end">
                        <Stack direction="vertical" className="justify-content-center mx-auto" gap={3}>
                            <h2 className="bottom-big-text"> You are taking the most out of our platforms!</h2>
                            <h4 className="bottom-small-text">And You are doing it without sharing any unwanted personal info :)</h4>
                            <Image fluid className="home-image-bottom" src={img2}/>
                        </Stack>


                    </div>
                </Container>
                }
            </div>
        </div>
    );
}

export default Homepage;