import Immutable from 'seamless-immutable';
import {configReducer} from '../configReducer';
import {LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL} from '../actions';

const initialState = Immutable({
  isLoggedIn: false,
  isFetching: false,
  error: null,
});

export const reducers = {
  [LOG_IN]: state =>
    Immutable.merge(state, {isLoggedIn: false, error: null, isFetching: true}),
  [LOG_IN_SUCCESS]: state =>
    Immutable.merge(state, {isLoggedIn: true, error: null, isFetching: false}),
  [LOG_IN_FAIL]: (state, {error}) =>
    Immutable.merge(state, {isLoggedIn: false, error, isFetching: false}),
};
export default configReducer(initialState, reducers);
