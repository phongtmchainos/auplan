import { BaseRequest } from "./BaseRequest";
import { FETCH_CALENDAR_MONTHLY_DATA_SUCCESS } from "../actions/calendarMonthly/actionTypes";

function* fetchCalendarMonthlyData() {
    yield BaseRequest.fetchData('/my-calendars', FETCH_CALENDAR_MONTHLY_DATA_SUCCESS);
}

export const CalendarMonthlyRequest = {
    fetchCalendarMonthlyData
};
