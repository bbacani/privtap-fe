import React, {useEffect, useState} from 'react';
import {service} from "../../service/ApiService";

function Action() {
    const [actions, setActions] = useState();

    useEffect(() => {
        getAllActions();
    }, []);

    const getAllActions = async () => {
        const response = await service().getAllActions();
        setActions(response.data);
    }

    return (
        <div>
            <h1>This is Action page.</h1>

            {actions?.map((action) => {
                return (
                    <div>
                        {action.id +
                        " , " +
                        action.name +
                        " ," +
                        action.description +
                        ", " +
                        action.createdAt
                        }
                    </div>
                );
            })}

        </div>
    );
}

export default Action;