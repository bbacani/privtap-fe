import React from "react";
import {Container} from "react-bootstrap";
import {Navigate} from "react-router-dom";

function AutomationSuccessful() {
    return (
      <div>
          <Container>
              Automation Succesfully created
              <Navigate to="/automations" />
          </Container>
      </div>
    );
}

export default AutomationSuccessful;