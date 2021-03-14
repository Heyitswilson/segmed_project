import { RECEIVE_ALL_PHOTOS } from '../actions/photos_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return Object.assign({}, state, action.photos);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default photosReducer;