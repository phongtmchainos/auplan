import {takeLatest} from 'redux-saga/effects';
import * as actionName from "./../actions/calendarMonthly/actionTypes";
import {CalendarMonthlyRequest} from "../api/CalendarMonthlyRequest";

export function* watchFetchCalendarMonthly() {
  yield takeLatest(actionName.FETCH_CALENDAR_MONTHLY_DATA, CalendarMonthlyRequest.fetchCalendarMonthlyData);
}