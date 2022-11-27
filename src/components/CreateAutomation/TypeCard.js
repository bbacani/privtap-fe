import React from "react";
import {Card} from "react-bootstrap";

function TypeCard(props) {

    const clickHandler = (keyID) => {
        props.onChange(keyID)
    };

    return (
        <Card
            className={props.active === props.object.id ? "active" : "not-active"}
            onClick={() => clickHandler(props.object.id)}
        >
            <Card.Body>
                <Card.Title>{props.object.name}</Card.Title>
                <Card.Text>{props.object.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TypeCard;