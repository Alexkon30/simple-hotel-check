import { all } from 'redux-saga/effects';
import { fetchHotelsWatcher } from './hotelsSaga';

export function* rootWatcher() {
  yield all([fetchHotelsWatcher()])
}
