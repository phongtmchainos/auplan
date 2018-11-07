import { fork } from 'redux-saga/effects';
import {
  watchFetchTopImages
} from './watchers';

export default function* startForman() {
  yield fork(watchFetchTopImages);
}
