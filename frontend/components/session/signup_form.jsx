import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

const SignupForm = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
    const history = useHistory();

    useEffect(() => {
        if (props.loggedIn) history.push('/');
    }, [props.loggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signup(credentials);
    };

    const demoLogin = (e) => {
        e.preventDefault();
        props.login({ email: "wilson@gmail.com", password: "password" });
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value});
    };
    
    const RenderErrors = () => {
        return props.errors.map((error, i) => {
            return (
                <Row key={i}>
                    <Col className="d-flex justify-content-center" key={i}>
                        {error}
                    </Col>
                </Row>
            )
        })
    };
    
    return (
        <Container className="d-flex justify-content-center align-items-center session">
            <Row>
                <Col>
                    <Row>
                        <Col className="d-flex justify-content-center">Create Account</Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Control 
                                    name="name"
                                    type="name" 
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                    value={credentials.name}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control 
                                    name="email"
                                    type="email" 
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    value={credentials.email}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Control 
                                    name="password"
                                    type="password" 
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                    value={credentials.password}
                                />
                            </Form.Group>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                    <Button variant="primary" type="submit">
                                        Signup
                                    </Button>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button onClick={(e) => demoLogin(e)} variant="primary" type="submit">
                                        Demo
                                    </Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="d-flex justify-content-center">
                                    <Link onClick={() => props.clearSessionErrors()} to="/login">To Login</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                    <RenderErrors />
                </Col>
            </Row>
        </Container>
    )
};

export default SignupForm;