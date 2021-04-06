import { START_LOADING, RECEIVE_ALL_PHOTOS } from '../actions/photos_actions';

const loadingReducer = (state=false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case START_LOADING:
            return true;
        case RECEIVE_ALL_PHOTOS: 
            return false;
        default:
            return state;
    };
};

export default loadingReducer;