import {BaseRequest} from "./BaseRequest";
import {FETCH_HOME_USER_RECOMMEND_SUCCESS} from "../actions/home/actionTypes";

function* fetchHomeUserRecommend() {
    yield BaseRequest.fetchData('/users/recommend', FETCH_HOME_USER_RECOMMEND_SUCCESS)
}

export const UsersRequest = {
    fetchHomeUserRecommend
};
