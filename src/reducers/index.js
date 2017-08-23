import { combineReducers } from 'redux';
import chat from './chatReducer';
import user from './userReducer';

export default combineReducers({
    chat,
    user
});