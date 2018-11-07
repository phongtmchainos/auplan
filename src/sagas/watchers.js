import {takeLatest} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import {ImagesRequest} from "../api/ImagesRequest";

export function* watchFetchTopImages() {
  yield takeLatest(types.FETCH_TOP_IMAGE, ImagesRequest.fetchTopImages);
}
