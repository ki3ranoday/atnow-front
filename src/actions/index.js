export const ActionTypes = {
    SIGN_IN: 'SIGNIN',
}

export const signIn = dispatch => (uid, password) => {
    // get request from the backend.then(res => )
    return dispatch({
        type: ActionTypes.SIGN_IN,
        payload: uid,
    });
}