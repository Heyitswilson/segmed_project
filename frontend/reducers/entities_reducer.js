import { combineReducers } from "redux";
import usersReducer from './users_reducer';

// modularizes reducers, holds entity reducers
const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;