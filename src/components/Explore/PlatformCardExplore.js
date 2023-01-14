import {Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "../Profile/Profile.css"
import {service} from "../../service/ApiService";
export default function PlatformCardExplore(props) {

    const [platform, setPlatform] = useState();

    useEffect(() => {
        const getPlatformByName = async () => {
            const response = await service().getPlatformByName(props.name);
            setPlatform(response.data);
        }
        getPlatformByName().then();
    }, []);


    return (

        <Col align="center" className="mb-5 mx-2 grid-item"
             style={{backgroundColor: platform?.color}}>
            <div>
                <h4 className="cardTitle text-uppercase">
                    {props.name}
                </h4>
            </div>
            <div className="platform-button"> {platform?.actionTypes.length} actions and {platform?.triggerTypes.length} triggers</div>
        </Col>
    )
}