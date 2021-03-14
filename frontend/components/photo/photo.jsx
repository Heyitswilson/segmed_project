import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Container, Button, Form, Image } from 'react-bootstrap';
import { debounce } from "lodash";

const Photo = (props) => {
    // state
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        // favorite status that is checked and set in the Photos component. 
        // used to decide what the "favorite" button does
        if (photo.favorite) setFavorite(true);
    }, [])

    let photo = props.photo;
    // object linking a photo to a user
    let favoriteAssociation = props.favorites[photo.id];

    const performAction = () => {
        if (favorite) {
            props.deleteFavorite(favoriteAssociation.id, photo.id);
            photo.favorite = false;
            setFavorite(false);
        } else {
            props.createFavorite({photo_id: photo.id, user_id: props.user});
            photo.favorite = true;
            setFavorite(true);
        };
    };

    // debounce to prevent duplicate records from being created and prevent unneccesary strain on server
    const debounceClick = useCallback(debounce(performAction, 400), [favorite]); 

    // decides button color
    let variantType = favorite ? "danger" : "secondary"; 
    return (
        <Container className="pb-4">
            <Row>
                <Col>
                    <Image src={photo.photoUrl} fluid rounded/>
                </Col>
            </Row>
            <Row className="pt-1">
                <Col className="d-flex justify-content-center">
                    <Button onClick={() => debounceClick()} variant={variantType}>Favorite</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default Photo;