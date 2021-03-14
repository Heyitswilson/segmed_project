import { RECEIVE_FAVORITE_ERRORS, RECEIVE_FAVORITE_DELETE, RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE } from '../actions/favorites_action';

const favoritesErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_FAVORITE_ERRORS:
            return action.errors;
        case RECEIVE_FAVORITE:
            return {};
        case RECEIVE_FAVORITE_DELETE:
            return {};
        case RECEIVE_ALL_FAVORITES:
            return {};
        default:
            return state;
    };
};

export default favoritesErrorsReducer;