import * as FavoritesAPIUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_FAVORITE_DELETE = "RECEIVE_FAVORITE_DELETE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
});

const receiveFavoriteDelete = () => ({
    type: RECEIVE_FAVORITE_DELETE
});

const receiveFavoriteErrors = (errors) => ({
    type: RECEIVE_FAVORITE_ERRORS,
    errors
});

export const createFavorite = favorite => dispatch => {
    FavoritesAPIUtil.createFavorite(favorite)
        .then(favorite => dispatch(receiveFavorite(favorite)))
        // it should 
        .catch(errors => dispatch(receiveFavoriteErrors(errors)))
};

export const deleteFavorite = id => dispatch => {
    FavoritesAPIUtil.deleteFavorite(id)
        .then(() => dispatch(receiveFavoriteDelete()))
        .catch(errors => dispatch(receiveFavoriteErrors(errors)))
};