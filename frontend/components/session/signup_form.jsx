import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

const SignupForm = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.processForm(credentials);
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value});
    };

    const RenderErrors = () => {
        return props.errors.map((error, i) => {
            return (
                <Row key={i}>{error}</Row>
            )
        })
    }

    return (
        <Container>
            <Row>
                <Col>Sign up</Col>
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            name="name"
                            type="name" 
                            placeholder="Enter name"
                            onChange={handleChange}
                            value={credentials.name}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name="email"
                            type="email" 
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={credentials.email}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Enter password"
                            onChange={handleChange}
                            value={credentials.password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
            <RenderErrors />
        </Container>
    )
};

export default SignupForm;