export const ActionTypes = {
    SIGN_IN: 'SIGNIN',
    SIGN_UP: 'SIGNUP',
}

export const signIn = dispatch => (uid, password) => {
    // get request from the backend.then(res => )
    return dispatch({
        type: ActionTypes.SIGN_IN,
        payload: uid,
    });
}

export const signUp = dispatch => (user) => {
    // post something to the backend
    return dispatch({
        type: ActionTypes.SIGN_UP,
        payload: user,
    })
}