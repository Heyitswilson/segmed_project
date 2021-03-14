import { RECEIVE_PHOTO_ERRORS, RECEIVE_ALL_PHOTOS } from '../actions/photos_actions';

const photosErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PHOTO_ERRORS:
            return action.errors;
        case RECEIVE_ALL_PHOTOS:
            return [];
        default: 
            return state;
    };
};

export default photosErrorsReducer;