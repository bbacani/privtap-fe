import {Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "../Profile/Profile.css"
import {service} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";
export default function PlatformCard(props) {
    const navigate = useNavigate();
    const [platform, setPlatform] = useState();

    useEffect(() => {
        const getPlatformByName = async () => {
            const response = await service().getPlatformByName(props.name);
            setPlatform(response.data);

        }
        getPlatformByName().then();
    }, []);

    function handleClick() {
        navigate('/scopes/' + props.name)
    }

    return (

        <Col align="center" className="mb-5 mx-2 grid-item"
             style={{backgroundColor: platform?.color}}>
            <div className="clickHover" onClick={handleClick}>
                <h4 className="cardTitle text-uppercase">
                    {props.name}
                </h4>
            </div>
        </Col>
    )
}