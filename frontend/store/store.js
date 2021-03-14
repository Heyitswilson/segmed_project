import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
// add logger to applyMiddleware to see state in console
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
);

export default configureStore;