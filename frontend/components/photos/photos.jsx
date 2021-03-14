import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import PhotoContainer from '../photo/photo_container';

const Photos = (props) => {
    useEffect(() => {
        props.getAllPhotos();
        props.getAllFavorites(props.user);
    }, [])

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
                <Row>
                    <PhotoContainer photo={photo} />
                </Row>
            )
            })
        )
    }

    return (
        <Container>
            Photos
            <ReturnPhotos/>
        </Container>
    )
}

export default Photos;