import React, {useEffect, useState} from "react";
import {Button, Container, Image, Row, Stack} from "react-bootstrap";

import "./HomepageSP.css"

import SubHeader from "../../common/SubHeader/SubHeader";
import {service} from "../../../service/ApiService";
import {ArrowRight} from "react-bootstrap-icons";


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
            <SubHeader authenticated={props.authenticated}/>

            <div>

                <Container fluid style={{backgroundColor: platform?.color}}>

                    <div align="start" className="user-container">
                        <Stack direction="horizontal">
                            <h1 className="my-5 bottom-big-text text-uppercase">{platform?.name}</h1>
                            <Stack direction="vertical" className="right-panel " gap={3}>
                                <h3>Make triggers and actions users will love</h3>
                                <p>Nobody likes triggers that are too complex or actions that are boring :)</p>
                                <Button variant="secondary" size="lg" className="platform-home-button">
                                    Add trigger
                                </Button>
                                <Button variant="secondary" size="lg" className="platform-home-button">
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