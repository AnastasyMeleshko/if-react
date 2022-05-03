import {LOGIN, LOGOUT} from "./actions";

export const initialState = {
    email : "test@gmail.com",
    password : "12345",
    isLogged: true,
}


export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN : {
            return {...state, isLogged: true}
        }
        case LOGOUT : {
            return {...state, isLogged: false}
        }
    }

    return {...state}
}
