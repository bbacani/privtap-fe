import React, {useEffect, useState} from "react";
import "./Platform.css"
import SubHeader from "../common/SubHeader/SubHeader";
import {Container, Form, Row} from "react-bootstrap";
import {service} from "../../service/ApiService";


function PlatformScopes(props) {

    const [scopes, setScopes] = useState();

    useEffect(() => {
        const getPlatformByName = async (name) => {
            const response = await service().getPlatformScopes(props.platformName);
            console.log(response)
            setScopes(response.data);

        }

        getPlatformByName(props.platformName).then();
    }, [props.platformName]);


    return (

        <div>

            <SubHeader authenticated={props.authenticated}/>


            <div className="scope-list-body">


                <div align="start" className="m-3 platform-info ">

                    <h1>Spotify</h1>
                    <p>This is a list of all the Facebook scopes You are currently sharing with us.
                        You are free to edit this list, but have in mind that disabling them can cause deletion of Your
                        automations.
                        You will be warned if that’s the case.</p>
                </div>

                <Container fluid>
                    <Row xs={2} md={4} lg={5} className="justify-content-start scope-list-container">
                        {scopes?.map((scope) => {
                            return (
                                <div className="scope-button">
                                    <Form.Check
                                        type="switch"
                                        id={scope}
                                        label={scope}
                                    />
                                </div>
                            )
                        })
                        }
                    </Row>
                </Container>


            </div>

        </div>
    );
}

export default PlatformScopes;