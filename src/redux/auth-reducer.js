import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "MUL-network/auth/SET_USER_DATA"



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
           return {
                ...state,
               ...action.payload
           };

        default:
            return state;
    }

}

export const setAuthUserData = (id, email, login, isAuth) =>({type: SET_USER_DATA, payload:{id, email, login, isAuth}})


export const getAuth = () => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberME) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberME);
    if (response.data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}



export default authReducer

/*
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response=> {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}
*/
