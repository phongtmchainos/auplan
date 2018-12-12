import {FETCH_HOME_TOP_IMAGE_SUCCESS} from "../actions/home/actionTypes";

let initState = {
    homeTopImages: []
};

export const imageReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_HOME_TOP_IMAGE_SUCCESS:
            return {
                ...state,
                homeTopImages: action.data
            };
        default:
            return state;
    }
};
