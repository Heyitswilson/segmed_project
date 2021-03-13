import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Photo from '../photo/photo';

const Photos = (props) => {
    useEffect(() => {
        props.getAllPhotos();
    }, [])

    const isFavorite = (photoID) => {
        // call to backend and grab user's favorite photo_ids
        if (props.favorites[photoID]) return true;
        return false;
    }

    const ReturnPhotos = () => {
        let photoObject = props.photos;
        let photoArray = Object.values(photoObject);
        return (photoArray.map(photo => {
            if (isFavorite(photo.id)) {
                photo.favorite = true;
            }
            return (
                <Row>
                    <Photo photo={photo} />
                    {/* Single photo
                    <img src={photo.photoUrl}></img> */}
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