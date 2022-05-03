export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const ACTION_LOGIN = (payload) => ({
    type: LOGIN,
    payload,
});

export const ACTION_LOGOUT = (payload) => ({
    type: LOGOUT,
    payload,
});
