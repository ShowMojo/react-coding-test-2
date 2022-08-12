import {put, takeLatest, call} from 'redux-saga/effects';
import {LOG_IN, logInSuccess, logInFail, CHECK_AUTH} from '../actions';
import service from './service';

export function* getLogIn({payload}) {
  try {
    const {account, password, navigation} = payload;
    const res = yield call(service.asyncLogIn, {account, password});

    if (res.status === 200) {
      const {data} = res;
      if (data.code === 0) {
        yield call(service.setLoggedInUser, {isLoggedIn: true});
        yield put(logInSuccess());
        navigation.navigate('TimezoneListPage');
      } else {
        yield put(logInFail(data.error));
      }
    } else {
      yield put(logInFail(''));
    }
  } catch (e) {
    yield put(logInFail(''));
  }
}

export function* checkAuth({payload}) {
  const {navigation} = payload;
  try {
    const res = yield call(service.getLoggedInUser);
    console.log(res);

    if (!res) {
      yield put(logInSuccess());
      navigation.navigate('Auth');
    } else {
      navigation.navigate('App');
    }
  } catch (e) {
    navigation.navigate('Auth');
  }
}

export default function* () {
  yield takeLatest(LOG_IN, getLogIn);
  yield takeLatest(CHECK_AUTH, checkAuth);
}
