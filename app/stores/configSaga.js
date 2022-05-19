import {fork} from 'redux-saga/effects';
import sagas from './sagas';

export default function* root() {
  yield fork(sagas);
}
