import {put, takeLatest, call} from 'redux-saga/effects';
import {LOG_IN, logInSuccess, logInFail} from '../actions';
import service from './service';

export function* getLogIn({payload}) {
  try {
    const {account, password, navigation} = payload;
    const res = yield call(service.asyncLogIn, {account, password});

    if (res.status === 200) {
      const {data} = res;
      if (data.code === 0) {
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

export default function* () {
  yield takeLatest(LOG_IN, getLogIn);
}
