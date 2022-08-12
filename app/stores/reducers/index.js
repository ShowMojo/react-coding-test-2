import Immutable from 'seamless-immutable';
import {configReducer} from '../configReducer';
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT,
} from '../actions';

const initialState = Immutable({
  isLoggedIn: false,
  isLoginFetching: false,
  error: null,
});

export const reducers = {
  [LOG_IN]: state =>
    Immutable.merge(state, {
      isLoggedIn: false,
      error: null,
      isLoginFetching: true,
    }),
  [LOG_IN_SUCCESS]: state =>
    Immutable.merge(state, {
      isLoggedIn: true,
      error: null,
      isLoginFetching: false,
    }),
  [LOG_IN_FAIL]: (state, {error}) =>
    Immutable.merge(state, {isLoggedIn: false, error, isLoginFetching: false}),
  [LOGOUT]: state => Immutable.merge(state, {}),
  [LOGOUT_SUCCESS]: state =>
    Immutable.merge(state, {
      isLoggedIn: false,
      error: null,
    }),
};
export default configReducer(initialState, reducers);
