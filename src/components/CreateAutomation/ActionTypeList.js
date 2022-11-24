import React, {useEffect, useState} from "react";
import {service} from "../../service/ApiService";
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import TypeCard from "./TypeCard";

export default function ActionTypeList(props) {
    const [actionTypes, setActionTypes] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        getAllActionTypes();
    }, []);

    const activeButton = (actionId) => {
        setActive(actionId)
        const activeAction=actionTypes?.find(action=> action.id===actionId)
        props.setSelectedAction(activeAction)
    }

    const getAllActionTypes = async () => {
        const response = await service().getAllActionTypes();
        setActionTypes(response.data);
    }

    return (
        <div>
            <ButtonGroup vertical>
                {actionTypes?.map((action) => {
                    return (
                        <Button>
                            <TypeCard active={active} object={action} onChange={activeButton}/>
                        </Button>
                    )
                })
                }
            </ButtonGroup>

        </div>
    )
}