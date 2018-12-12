import defaultAction from "./../index";
import * as actionName from "./actionTypes";

export const fetchTopImages = () => {
    return defaultAction(actionName.FETCH_HOME_TOP_IMAGE)
};

export const fetchScheduleRecommend = () => {
    return defaultAction(actionName.FETCH_HOME_SCHEDULE_RECOMMEND)
};

export const fetchScheduleRecent = () => {
    return defaultAction(actionName.FETCH_HOME_SCHEDULE_RECENT)
};

export const fetchUserRecommend = () => {
    return defaultAction(actionName.FETCH_HOME_USER_RECOMMEND)
};

export const fetchCalendarRecommend = () => {
    return defaultAction(actionName.FETCH_HOME_CALENDAR_RECOMMEND)
};

export const fetchCalendarRecent = () => {
    return defaultAction(actionName.FETCH_HOME_CALENDAR_RECENT)
};
