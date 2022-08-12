import {Alert, Platform, ToastAndroid} from 'react-native';
import {put, takeLatest, call, takeEvery} from 'redux-saga/effects';
import {
  LOG_IN,
  logInSuccess,
  logInFail,
  CHECK_AUTH,
  LOGOUT,
  logoutSuccess,
  LOG_IN_FAIL,
} from '../actions';
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

export function* logoutAsync({payload}) {
  const {navigation} = payload;
  try {
    yield call(service.removeLoggedInUser);
    yield put(logoutSuccess());
    navigation.navigate('Auth');
  } catch (e) {
    console.log(e);
  }
}

export function* loginError({error}) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(error, ToastAndroid.SHORT);
  } else {
    Alert.alert('Error', error);
  }
}

export default function* () {
  yield takeLatest(LOG_IN, getLogIn);
  yield takeLatest(CHECK_AUTH, checkAuth);
  yield takeLatest(LOGOUT, logoutAsync);
  yield takeEvery(LOG_IN_FAIL, loginError);
}
