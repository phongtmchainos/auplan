import defaultAction from "./../index";
import * as actionName from "./actionTypes";

export const fetchCalendarMonthly = () => {
    return defaultAction(actionName.FETCH_CALENDAR_MONTHLY_DATA)
};
