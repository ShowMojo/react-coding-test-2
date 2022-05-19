export const LOG_IN = 'log in';
export const LOG_IN_SUCCESS = 'log in success';
export const LOG_IN_FAIL = 'log in fail';

export const logIn = payload => ({type: LOG_IN, payload});
export const logInSuccess = () => ({type: LOG_IN_SUCCESS});
export const logInFail = error => ({type: LOG_IN_FAIL, error});
