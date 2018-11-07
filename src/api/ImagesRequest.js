import {BaseApi} from "./BaseApi";
// import {put} from 'redux-saga/effects';
// import * as types from '../constants/actionTypes';

function* fetchTopImages(action) {
  try {
    yield BaseApi.get('/calendars/recommend');
    // console.log(result);
  } catch (e) {
    // console.log(e.message);
  }
}

export const ImagesRequest = {
  fetchTopImages,
};
