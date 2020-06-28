import {combineReducers} from 'react-redux';
import UserReducer from './user';

export default combineReducers({
    user: UserReducer,
});