import React, {useEffect, useState} from "react";
import {Container, Image, Row} from "react-bootstrap";
import SubHeader from "../common/SubHeader/SubHeader";
import "./Explore.css"
import "../Home/Homepage.css"
import {service} from "../../service/ApiService";
import img2 from "../../images/explore-bottom-pic.png"
import imgLogos from "../../images/platform_logos.png"
import PlatformCardExplore from "./PlatformCardExplore";


function Explore(props) {

    const [platforms, setPlatforms] = useState();

    useEffect(() => {
        const getPlatformNames = async () => {
            const response = await service().getPlatformNames();
            setPlatforms(response.data);
        }
        getPlatformNames().then();
    }, []);


    return (
        <div>
            <SubHeader authenticated={props.authenticated}/>

            <div>

                <Container fluid>
                    <div align="start" className="mt-5">
                        <p className="text-big">Explore platforms</p>
                        <p className="text-big">Dive into their possibilities</p>
                        <p className="text-big"> Create automations using them</p>

                        <p className="text-small">Platforms registered to PrivTAP can be used to create useful and automations.
                            Want to turn on Your favourite playlist on Your smart TV anytime You enter Your apartment?
                            Phillips and Spotify got You covered!</p>

                        <Image fluid className="image-logo" src={imgLogos}/>
                    </div>
                    {platforms &&
                    <div className="platform-list-body">
                        <h3> Popular</h3>
                        <Container fluid className="grid-container">
                            <Row xs={2} md={4} lg={5} className="justify-content-start">
                                {platforms?.map((platform) => {
                                    return (
                                        <PlatformCardExplore name={platform}/>
                                    )
                                })}
                            </Row>
                        </Container>
                    </div>
                    }

                    <div className="home-end">
                        <h2 className="bottom-big-text"> Automations help You stay up to date with Your tasks, make things happen automatically and more</h2>
                        <Image fluid className="home-image-bottom" src={img2}/>
                        <h4>And they are quite fun!</h4>


                    </div>
                </Container>
                }
            </div>
        </div>
    );
}

export default Explore;