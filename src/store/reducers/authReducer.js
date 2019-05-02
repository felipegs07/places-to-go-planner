const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    if (action.type === 'LOGIN_SUCESS'){
        return {
            ...state,
            authError: null
        }
    }
    if (action.type === 'LOGIN_ERROR'){
        return {
            ...state,
            authError: 'Login Error'
        }
    }
    if (action.type === 'SIGNOUT_SUCESS'){
        console.log('sign out');
        return state;
    }
    return state;
}

export default authReducer;