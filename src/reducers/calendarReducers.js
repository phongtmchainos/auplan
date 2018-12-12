import {FETCH_HOME_CALENDAR_RECENT_SUCCESS, FETCH_HOME_CALENDAR_RECOMMEND_SUCCESS} from "../actions/home/actionTypes";

let initState = {
    homeCalendarRecommends: [],
    homeCalendarRecent: []
};

export const calendarReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_HOME_CALENDAR_RECOMMEND_SUCCESS:
            return {
                ...state,
                homeCalendarRecommends: action.data
            };
        case FETCH_HOME_CALENDAR_RECENT_SUCCESS:
            return {
                ...state,
                homeCalendarRecent: action.data
            };
        default:
            return state;
    }
};
