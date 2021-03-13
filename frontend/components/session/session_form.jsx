import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import loginFormContainer from './login_form_container';
import signupFormContainer from './signup_form_container';

const sessionForm = () => {
    const [form, setForm] = useState("Login");

    // useEffect(() => {
    //     buttonDisplay = form
    // }, [form])

    let RenderedForm;
    form === "Login" ? RenderedForm = loginFormContainer : RenderedForm = signupFormContainer;

    return (
        <Container>
            <Row>
                <RenderedForm/>
            </Row>
            <Row>
                {/* <Col>
                    <Button onClick={setForm(buttonDisplay)}>
                        {buttonDisplay}
                    </Button>    
                </Col> */}
                <Col>
                    <Button>
                        Demo
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default sessionForm;