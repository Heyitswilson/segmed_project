import * as FavoritesAPIUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_FAVORITE_DELETE = "RECEIVE_FAVORITE_DELETE";
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
});

const receiveAllFavorites = (favorites) => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites
})

const receiveFavoriteDelete = (photoId) => ({
    type: RECEIVE_FAVORITE_DELETE,
    photoId
});

const receiveFavoriteErrors = (errors) => ({
    type: RECEIVE_FAVORITE_ERRORS,
    errors
});

export const createFavorite = favorite => dispatch => {
    FavoritesAPIUtil.createFavorite(favorite)
        .then(favorite => dispatch(receiveFavorite(favorite)))
        .catch(errors => dispatch(receiveFavoriteErrors(errors)))
};

export const getAllFavorites = userId => dispatch => {
    FavoritesAPIUtil.getAllFavorites(userId)
        .then(favorites => dispatch(receiveAllFavorites(favorites)))
        .catch(errors => dispatch(receiveFavoriteErrors(errors)))
};

export const deleteFavorite = (favoriteId, photoId) => dispatch => {
    FavoritesAPIUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(receiveFavoriteDelete(photoId)))
        .catch(errors => dispatch(receiveFavoriteErrors(errors)))
};