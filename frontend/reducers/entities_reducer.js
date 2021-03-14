import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import favoritesReducer from './favorites_reducer';

// modularizes reducers, holds entity reducers
const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    favorites: favoritesReducer
});

export default entitiesReducer;