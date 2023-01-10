import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {service} from "../../service/ApiService";

function TypeCard(props) {


    const clickHandler = (keyID) => {
        props.onChange(keyID)
    };

    return (
        <div>
            {
                props.object &&
                <Card
                    className={props.active === props.object.id ? "active" : "not-active"}
                    onClick={() => clickHandler(props.object.id)}
                >
                    <Card.Body>
                        <Card.Title>{props.object.name}</Card.Title>
                        <Card.Text>{props.object.description}</Card.Text>
                    </Card.Body>
                </Card>
            }
            {
                props.platform &&
                <Card
                    className={props.active === props.platform ? "active" : "not-active"}
                    onClick={() => clickHandler(props.platform)}
                >
                    <Card.Body>
                        <Card.Title className="text-uppercase">{props.platform}</Card.Title>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default TypeCard;