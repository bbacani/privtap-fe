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

            {props.authenticated ?
                <Stack direction="horizontal" className="justify-content-center ">

                    <a href="/home"
                       className={active === "1" ? " subheader-item active" : "subheader-item"}
                       id={"1"}
                       onClick={handleClick}>Home</a>
                    <a href="/automations"
                       className={active === "2" ? " subheader-item active" : "subheader-item"}
                       id={"2"}
                       onClick={handleClick}>Automations</a>
                    <a href="/platforms"
                       className={active === "3" ? " subheader-item active" : "subheader-item"}
                       id={"3"}
                       onClick={handleClick}>Platforms</a>
                    <a href="/mission"
                       className={active === "4" ? " subheader-item active" : "subheader-item"}
                       id={"4"}
                       onClick={handleClick}>Mission</a>


                </Stack>
                :
                <Stack direction="horizontal" className="m-3 justify-content-center">

                    <h2>Home</h2>
                    <h2>Explore</h2>
                    <h2>Our mission</h2>

                </Stack>
            }
        </Container>

    );

}

export default SubHeader;
