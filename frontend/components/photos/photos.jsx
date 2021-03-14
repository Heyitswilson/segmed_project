import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import PhotoContainer from '../photo/photo_container';

const Photos = (props) => {
    useEffect(() => {
        if (Boolean(props.user)) {
            props.getAllPhotos();
            props.getAllFavorites(props.user);
        } else {
            history.push('/login');
        };

    }, [props.user])

    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        props.logout();
        // history.push('/login');
    }

    const isFavorite = (photoID) => {
        // if a user's favorite photos includes the current photoID
        if (props.favorites[photoID]) return true;
        return false;
    }

    const ReturnPhotos = () => {
        let photoObject = props.photos;
        let photoArray = Object.values(photoObject);
        return (photoArray.map(photo => {
            if (isFavorite(photo.id)) {
                // mark favorite status so that a flag can be set in the Photo component
                photo.favorite = true;
            }
            return (
                <Row key={photo.id}>
                    <PhotoContainer key={photo.id} photo={photo} />
                </Row>
            )
            })
        )
    }

    return (
        <Container>
            <ReturnPhotos/>
            <Row className="d-flex justify-content-center">
                <Button onClick={(e) => handleLogout(e)}>Logout</Button>
            </Row>
        </Container>
    )
}

export default Photos;