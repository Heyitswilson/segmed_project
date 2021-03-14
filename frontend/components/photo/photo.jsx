import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form, Image } from 'react-bootstrap';

const Photo = (props) => {
    // state
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        // favorite status that is checked and set in the Photos component
        if (photo.favorite) setFavorite(true);
    }, [])

    // photo passed from Photos component
    let photo = props.photo;
    // object linking a photo to a user
    let favoriteAssociation = props.favorites[photo.id];

    const handleClick = (e) => {
        e.preventDefault();
        if (favorite) {
            props.deleteFavorite(favoriteAssociation.id, photo.id);
            photo.favorite = false;
            setFavorite(false);
        } else {
            props.createFavorite({photo_id: photo.id, user_id: props.user});
            photo.favorite = true;
            setFavorite(true);
        }
    }

    // decides button color
    let variantType = favorite ? "danger" : "secondary"; 
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={photo.photoUrl} fluid rounded/>
                </Col>
            </Row>
            <Row>
                <Button onClick={(e) => handleClick(e)} variant={variantType}>Favorite</Button>
            </Row>
        </Container>
    )
};

export default Photo;