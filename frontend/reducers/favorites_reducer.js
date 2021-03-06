import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE, RECEIVE_FAVORITE_DELETE } from '../actions/favorites_action';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE: 
            return Object.assign({}, state, {[action.favorite.photo_id]: action.favorite});
        case RECEIVE_FAVORITE_DELETE:
            let newState = Object.assign({}, state);
            delete newState[action.photoId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default: 
            return state;
    };
};

export default favoritesReducer;