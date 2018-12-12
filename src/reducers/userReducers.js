import {FETCH_HOME_USER_RECOMMEND_SUCCESS} from "../actions/home/actionTypes";

let initState = {
    homeUserRecommends: [{
        "id": 1231,
        "display_name": "宮島 太郎1",
        "account_id": "@auplan",
        "profile_image": "\thttps://s3-ap-northeast-1.amazonaws.com/auplan-mock/108x108.png"
    },
        {
            "id": 1231,
            "display_name": "宮島 太郎2",
            "account_id": "@auplan",
            "profile_image": "\thttps://s3-ap-northeast-1.amazonaws.com/auplan-mock/108x108.png",
            "isOfficial": true
        },
        {
            "id": 1231,
            "display_name": "宮島 太郎3",
            "account_id": "@auplan",
            "profile_image": "\thttps://s3-ap-northeast-1.amazonaws.com/auplan-mock/108x108.png",
            "isOfficial": true
        },
        {
            "id": 1231,
            "display_name": "宮島 太郎4",
            "account_id": "@auplan",
            "profile_image": "\thttps://s3-ap-northeast-1.amazonaws.com/auplan-mock/108x108.png"
        },
        {
            "id": 1231,
            "display_name": "宮島 太郎5",
            "account_id": "@auplan",
            "profile_image": "\thttps://s3-ap-northeast-1.amazonaws.com/auplan-mock/108x108.png"
        }]
};

export const userReducers = (state = initState, action) => {
    switch (action.type) {
        case FETCH_HOME_USER_RECOMMEND_SUCCESS:
            return {
                ...state,
                homeUserRecommends: action.data
            };
        default:
            return state;
    }
};
