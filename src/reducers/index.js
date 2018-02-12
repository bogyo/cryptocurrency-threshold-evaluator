import {combineReducers} from 'redux';
import {default as threshold} from './threshold';
import {default as auth} from './auth';

const reducer = combineReducers({threshold, auth});

export default reducer;
