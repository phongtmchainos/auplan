import {ApiRequest} from "./ApiRequest";
import {put} from 'redux-saga/effects';
import App from '../configs/App';

function logInfo(data) {
    if (App.ENABLE_LOG_ERROR) console.log(data);
}

function logError(data) {
    if (App.ENABLE_LOG_ERROR) console.error(data);
}

function* fetchData(path, type) {
    try {
        let response = yield ApiRequest.get(path);
        yield put({type: type, data: response.data});
        // Log data dispatch
        logInfo({type: type, data: response.data})
    } catch (e) {
        // Log error dispatch
        logError(e.message)
    }
}

export const BaseRequest = {
    fetchData
};
