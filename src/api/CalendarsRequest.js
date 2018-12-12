import {BaseRequest} from "./BaseRequest";
import {FETCH_HOME_CALENDAR_RECOMMEND_SUCCESS, FETCH_HOME_CALENDAR_RECENT_SUCCESS} from "../actions/home/actionTypes";

function* fetchFetchHomeCalendarRecommend() {
    yield BaseRequest.fetchData('/calendars/recent', FETCH_HOME_CALENDAR_RECOMMEND_SUCCESS);
}

function* fetchFetchHomeCalendarRecent() {
    yield BaseRequest.fetchData('/calendars/recent', FETCH_HOME_CALENDAR_RECENT_SUCCESS);
}

export const CalendarsRequest = {
    fetchFetchHomeCalendarRecommend,
    fetchFetchHomeCalendarRecent
};
