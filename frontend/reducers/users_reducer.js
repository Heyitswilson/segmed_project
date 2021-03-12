import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// track user state
const usersReducer = (state={}, action) => {
    Object.freeze();

    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, { [action.user.id]: action.user});
        default:
            return state;
    }
};

export default usersReducer;