import {BaseRequest} from "./BaseRequest";
import {FETCH_HOME_SCHEDULE_RECENT_SUCCESS, FETCH_HOME_SCHEDULE_RECOMMEND_SUCCESS} from "../actions/home/actionTypes";

function* fetchFetchHomeScheduleRecommend() {
    yield BaseRequest.fetchData('/schedules/recommend', FETCH_HOME_SCHEDULE_RECOMMEND_SUCCESS)
}

function* fetchFetchHomeScheduleRecent() {
    yield BaseRequest.fetchData('/schedules/recent', FETCH_HOME_SCHEDULE_RECENT_SUCCESS)
}

export const SchedulesRequest = {
    fetchFetchHomeScheduleRecommend,
    fetchFetchHomeScheduleRecent
};
