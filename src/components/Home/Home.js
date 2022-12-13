import React, {useEffect, useState} from "react";
import {Button, Container, Image, Row} from "react-bootstrap";
import SubHeader from "../common/SubHeader/SubHeader";
import "./Home.css"
import {service} from "../../service/ApiService";
import img from "../../images/home-pic.png"
import img2 from "../../images/home-pic-2.png"
import PlatformCard from "../common/PlatformCard";


function Home(props) {

    const [platforms, setPlatforms] = useState();

    useEffect(() => {
        const getPlatformNames = async () => {
            const response = await service().getPlatformNames();
            setPlatforms(response.data);
            console.log("platforme" + response.data)
        }
        if (props.user)
            getPlatformNames().then();
    }, []);


    return (
        <div>
            <SubHeader authenticated={props.authenticated}/>

            <div>
                {props.user?.id &&
                <Container fluid>
                    <div align="start" className="user-container">
                        <h1 className="my-5">{props.user.username}</h1>

                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                            voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
                            fuga praesentium optio, eaque rerum! Provident similique accusantium nemo</p>

                        <Button variant="secondary" size="lg" className="platform-home-button">
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
                    </div>
                    }
                    <div className="home-end">
                        <h2 className="bottom-big-text"> You are taking the most out of our platforms!</h2>
                        <h4>And You are doing it without sharing any unwanted personal info :)</h4>
                        <Image fluid className="home-image-bottom" src={img2}/>

                    </div>
                </Container>
                }
            </div>
        </div>
    );
}

export default Home;