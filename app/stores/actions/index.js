export const LOG_IN = 'log in';
export const LOG_IN_SUCCESS = 'log in success';
export const LOG_IN_FAIL = 'log in fail';
export const CHECK_AUTH = 'check auth';
export const LOGOUT = 'logout';
export const LOGOUT_SUCCESS = 'logout success';
export const GET_TIMEZONES = 'get timezones';
export const GET_TIMEZONES_SUCCESS = 'get timezones success';
export const GET_TIMEZONES_FAILURE = 'get timezones failure';

export const logIn = payload => ({type: LOG_IN, payload});
export const logInSuccess = () => ({type: LOG_IN_SUCCESS});
export const logInFail = error => ({type: LOG_IN_FAIL, error});
export const checkAuth = payload => ({type: CHECK_AUTH, payload});
export const logout = payload => ({type: LOGOUT, payload});
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS});
export const getTimezones = () => ({type: GET_TIMEZONES});
export const getTimezonesSuccess = data => ({
  type: GET_TIMEZONES_SUCCESS,
  data,
});
export const getTimezonesFailure = error => ({
  type: GET_TIMEZONES_FAILURE,
  error,
});
