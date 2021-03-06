import * as PhotosAPIUtil from '../util/photos_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const START_LOADING = "START_LOADING";

const startLoading = () => ({
    type: START_LOADING
});

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
});

const receivePhotoErrors = (errors) => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
});

export const getAllPhotos = () => dispatch => {
    dispatch(startLoading());
    return (
        PhotosAPIUtil.getAllPhotos()
            .then(photos => dispatch(receiveAllPhotos(photos)))
            .catch(errors => dispatch(receivePhotoErrors(errors)))
    )
};
