import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import React from 'react';

const Footer = () => {
    return (
        <Navbar bg="primary" variant="light">
            <Nav className="footer">
                <Row className="d-flex justify-content-center footer">
                    <Col className="title d-flex justify-content-end">
                        Rocky Photos
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/wilson-ngu/" target="_blank">
                            <img className="link-icons" src="https://segmed-dev.s3-us-west-1.amazonaws.com/social/whiteLinkedIn.png"/>
                        </a>
                    </Col>
                    <Col className="d-flex justify-content-start">
                        <a href="https://github.com/Heyitswilson/Toasty-fullstack" target="_blank">
                            <img className="link-icons" src="https://segmed-dev.s3-us-west-1.amazonaws.com/studypal/white-github.png"/>
                        </a>
                    </Col>
                </Row>
            </Nav>
        </Navbar>
    )
}

export default Footer;