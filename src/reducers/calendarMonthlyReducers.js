import {FETCH_CALENDAR_MONTHLY_DATA_SUCCESS} from "../actions/calendarMonthly/actionTypes";

let initState = {
    calendarMonthly: []
};

export const calendarMonthlyReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CALENDAR_MONTHLY_DATA_SUCCESS:
            return {
                ...state,
                calendarMonthly: action.data
            };
        default:
            return state;
    }
};
