import {ActionTypes} from '../actions';

const initialState = {
    uid: null
}

export default function (state=initialState, action) {
    switch(action.type) {
        case ActionTypes.SIGN_IN:
            return {
                ...state,
                uid: action.payload
            };
        case ActionTypes.SIGN_UP:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}