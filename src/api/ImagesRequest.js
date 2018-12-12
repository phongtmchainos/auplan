import { BaseRequest } from "./BaseRequest";
import {FETCH_HOME_TOP_IMAGE_SUCCESS} from "../actions/home/actionTypes";

function* fetchHomeTopImages() {
    yield BaseRequest.fetchData('/top_images', FETCH_HOME_TOP_IMAGE_SUCCESS);
}

export const ImagesRequest = {
    fetchHomeTopImages
};
