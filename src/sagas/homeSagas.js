import {takeLatest} from 'redux-saga/effects';
import {ImagesRequest} from "../api/ImagesRequest";
import {CalendarsRequest} from "../api/CalendarsRequest";
import {SchedulesRequest} from "../api/SchedulesRequest";
import {UsersRequest} from "../api/UsersRequest";
import * as actionName from "./../actions/home/actionTypes";

export function* watchFetchHomeTopImages() {
    yield takeLatest(actionName.FETCH_HOME_TOP_IMAGE, ImagesRequest.fetchHomeTopImages);
}

export function* watchFetchHomeScheduleRecommend() {
    yield takeLatest(actionName.FETCH_HOME_SCHEDULE_RECOMMEND, SchedulesRequest.fetchFetchHomeScheduleRecommend);
}

export function* watchFetchHomeScheduleRecent() {
    yield takeLatest(actionName.FETCH_HOME_SCHEDULE_RECENT, SchedulesRequest.fetchFetchHomeScheduleRecent);
}

export function* watchFetchHomeUserRecommend() {
    yield takeLatest(actionName.FETCH_HOME_USER_RECOMMEND, UsersRequest.fetchHomeUserRecommend);
}

export function* watchFetchHomeCalendarRecommend() {
    yield takeLatest(actionName.FETCH_HOME_CALENDAR_RECOMMEND, CalendarsRequest.fetchFetchHomeCalendarRecommend);
}

export function* watchFetchHomeCalendarRecent() {
    yield takeLatest(actionName.FETCH_HOME_CALENDAR_RECENT, CalendarsRequest.fetchFetchHomeCalendarRecent);
}
