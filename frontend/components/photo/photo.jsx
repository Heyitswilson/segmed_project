import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form, Image } from 'react-bootstrap';

const Photo = ({photo}) => {
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        if (photo.favorite) setFavorite(true);
    }, [])

    let variantType = favorite ? "danger" : "secondary"; 
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={photo.photoUrl} fluid rounded/>
                </Col>
            </Row>
            <Row>
                <Button variant={variantType}>Favorite</Button>
            </Row>
        </Container>
    )
};

export default Photo;