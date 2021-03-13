import { RECEIVE_ALL_PHOTOS } from '../actions/photos_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return Object.assign({}, state, action.photos);
        default:
            return state;
    }
}

export default photosReducer;