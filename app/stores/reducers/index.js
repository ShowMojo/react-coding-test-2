import Immutable from 'seamless-immutable';
import {configReducer} from '../configReducer';
import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT,
  GET_TIMEZONES,
  GET_TIMEZONES_SUCCESS,
  GET_TIMEZONES_FAILURE,
} from '../actions';

const initialState = Immutable({
  isLoggedIn: false,
  isLoginFetching: false,
  error: null,
  timeZones: [],
  isTimeZonesFetching: false,
  timeZoneFetchingError: null,
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
  [GET_TIMEZONES]: state => Immutable.merge(state, {isTimeZonesFetching: true}),
  [GET_TIMEZONES_SUCCESS]: (state, {data}) =>
    Immutable.merge(state, {isTimeZonesFetching: false, timeZones: data}),
  [GET_TIMEZONES_FAILURE]: (state, {error}) =>
    Immutable.merge(state, {
      isTimeZonesFetching: false,
      timeZoneFetchingError: error,
    }),
};
export default configReducer(initialState, reducers);
