export const LOG_IN = 'log in';
export const LOG_IN_SUCCESS = 'log in success';
export const LOG_IN_FAIL = 'log in fail';
export const CHECK_AUTH = 'check auth';
export const LOGOUT = 'logout';
export const LOGOUT_SUCCESS = 'logout success';

export const logIn = payload => ({type: LOG_IN, payload});
export const logInSuccess = () => ({type: LOG_IN_SUCCESS});
export const logInFail = error => ({type: LOG_IN_FAIL, error});
export const checkAuth = payload => ({type: CHECK_AUTH, payload});
export const logout = payload => ({type: LOGOUT, payload});
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS});
