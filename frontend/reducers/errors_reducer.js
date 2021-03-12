import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_redeucer';

// modularize reducers, holds error reducers
const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;