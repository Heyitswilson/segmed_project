import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';

// modularizes reducers, holds entity reducers
const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer
});

export default entitiesReducer;