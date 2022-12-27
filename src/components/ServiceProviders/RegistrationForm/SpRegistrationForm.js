import React, {useState} from "react";
import "./SpRegistrationForm.css";
import group from "../RegistrationForm/img/Group.png"
import {Button, Col, Container, Form, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import {service} from "../../../service/ApiService";
import {useNavigate} from "react-router-dom";

function SpRegistrationForm(props) {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [color, setColor] = useState("#0c0c54");
    const [endpoint, setEndpoint] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();
    const [secret, setSecret] = useState();

    const handleSubmitButton = async () => {
        const formData = {
            name: name,
            color: color,
            endpoint: endpoint,
            token: token,
            id: id,
            secret: secret,
        }

        //TODO: Check if props.userId is correct or change to props.devId
        await service().sendFormData(props.userId, formData)
        navigate(`/developers`)
    }

    return (
        <div>
            <Container className="p-5">
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Form.Label>Platform name</Form.Label>
                                        <FormControl
                                            onChange={e => setName(e.target.value)}
                                            placeholder="Give a name to your platform"
                                        />
                                    </Col>
                                    <Col sm="auto">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control
                                            type="color"
                                            id="colorInput"
                                            defaultValue="#0c0c54"
                                            title="Add the main color of your platform"
                                            onChange={e => setColor(e.target.value)}
                                        />
                                    </Col>
                                    <Form.Text className="mb-3">The color will be used in all the pages of your Platform</Form.Text>
                                </Row>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>OAuth endpoint</Form.Label>
                                <FormControl
                                    onChange={e => setEndpoint(e.target.value)}
                                    placeholder="Add the URL of the OAuth endpoint"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>OAuth token endpoint</Form.Label>
                                <FormControl
                                    onChange={e => setToken(e.target.value)}
                                    placeholder="Add the URL of the OAuth token endopint"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>Client ID</Form.Label>
                                <FormControl
                                    onChange={e => setId(e.target.value)}
                                    placeholder="Add your Client ID"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>Client secret</Form.Label>
                                <FormControl
                                    onChange={e => setSecret(e.target.value)}
                                    placeholder="Add your Client secret"
                                />
                            </FormGroup>
                        </Form>
                        <Col align="center" className="mt-5">
                            <Button
                                className="px-5"
                                variant="dark"
                                size="lg"
                                type="submit"
                                onClick={handleSubmitButton}
                            >
                                Submit
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
                <div>
                    <Image className="d-none d-lg-block group" src={group}/>
                </div>
        </div>
    );
}

export default SpRegistrationForm;