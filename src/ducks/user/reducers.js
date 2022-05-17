import { handleActions } from 'redux-actions';
import {ACTION_LOGIN, ACTION_LOGOUT} from "./actions";

export const initialState = {
    email : "test@gmail.com",
    password : "12345",
    isLogged: false,
}

const userReducer = {
    [ACTION_LOGIN]: (state = initialState) => ({
        ...state,
        isLogged: true
    }),
    [ACTION_LOGOUT]: (state = initialState) => ({
        ...state,
        isLogged: false
    })
}

export default handleActions(userReducer, initialState)
