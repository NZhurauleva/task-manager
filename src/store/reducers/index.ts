import { combineReducers } from 'redux';

import todosReducers from './todosReducer';

const rootReducers = combineReducers({ todosReducers });

export default rootReducers;
