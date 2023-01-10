import React, {useState} from "react";
import "./SubHeader.css"
import {Container, Stack} from "react-bootstrap";

function SubHeader(props) {

    const [active, setActive] = useState()

    const handleClick = (event) => {
        setActive(event.target.id);
    }

    return (

        <Container className="subheader-container">


                <Stack direction="horizontal" className="justify-content-center ">

                    <a href="/home"
                       className={active === "1" ? " subheader-item active" : "subheader-item"}
                       id={"1"}
                       onClick={handleClick}>Home</a>
                    <a href="/explore"
                       className={active === "2" ? " subheader-item active" : "subheader-item"}
                       id={"2"}
                       onClick={handleClick}>Explore</a>
                    <a href="/automations"
                       className={active === "3" ? " subheader-item active" : "subheader-item"}
                       id={"3"}
                       onClick={handleClick}>Automations</a>



                </Stack>
        </Container>

    );

}

export default SubHeader;
