import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_redeucer';
import photosErrorsReducer from './photos_errors_reducer';

// modularize reducers, holds error reducers
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    photos: photosErrorsReducer
})

export default errorsReducer;