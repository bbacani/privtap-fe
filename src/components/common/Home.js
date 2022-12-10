import React from "react";
import {Container} from "react-bootstrap";
import SubHeader from "./SubHeader/SubHeader";


function Home(props) {
    return (
        <Container fluid className="p-3 my-5">
            <SubHeader authenticated={props.authenticated}/>

           <h1>Home page</h1>

        </Container>
    );
}

export default Home;