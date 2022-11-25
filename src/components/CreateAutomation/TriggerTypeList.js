import React, {useEffect, useState} from "react";
import "./CreateAutomation.css";
import {service} from "../../service/ApiService";
import TypeCard from "./TypeCard";
import {Button, ButtonGroup} from "react-bootstrap";

export default function TriggerTypeList(props) {
    const [triggerTypes, setTriggerTypes] = useState();
    const [active, setActive] = useState();

    useEffect(() => {
        getAllTriggerTypes();
    }, []);

    const activeButton = (triggerId) => {
        setActive(triggerId)
        const activeTrigger=triggerTypes?.find(trigger=> trigger.id===triggerId)
        console.log(activeTrigger)
        props.setSelectedTrigger(activeTrigger)
    }

    const getAllTriggerTypes = async () => {
        const response = await service().getAllTriggerTypes();
        setTriggerTypes(response.data);
    }

    return (
        <div>
            <ButtonGroup vertical>
                {triggerTypes?.map((trigger) => {
                    return (
                        <Button>
                            <TypeCard active={active} object={trigger} onChange={activeButton}/>
                        </Button>
                    )
                })
                }
            </ButtonGroup>
        </div>
    )
}