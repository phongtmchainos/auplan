import {FETCH_HOME_SCHEDULE_RECENT_SUCCESS, FETCH_HOME_SCHEDULE_RECOMMEND_SUCCESS} from "../actions/home/actionTypes";

let initState = {
    homeTopImages: [],
    homeScheduleRecommends: [],
    homeScheduleRecent: [],
    homeUserRecommends: [],
    homeCalendarRecommends: [],
    homeCalendarRecent: [],
};

export const scheduleReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_HOME_SCHEDULE_RECOMMEND_SUCCESS:
            return {
                ...state,
                homeScheduleRecommends: action.data
            };
        case FETCH_HOME_SCHEDULE_RECENT_SUCCESS:
            return {
                ...state,
                homeScheduleRecent: action.data
            };
        default:
            return state;
    }
};
