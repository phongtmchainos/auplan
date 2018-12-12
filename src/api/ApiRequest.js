import App from '../configs/App';

const axios = require('axios');

function* get(url, params = {}) {
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
    let fullUrl = Object.keys(params).length ? `${_getUrl(url)}?${query}` : _getUrl(url);
    let response = yield axios.get(fullUrl, {..._getConfig()});
    return yield {status: response.status, data: response.data};
}

function* post(url, params) {
    let response = yield axios.post(_getUrl(url), params, {..._getConfig()});
    return yield {status: response.status, data: response.data};
}

function* put(url, params) {
    let response = yield axios.put(_getUrl(url), params, {..._getConfig()});
    return yield {status: response.status, data: response.data};
}

function* del(url) {
    let response = yield axios.delete(_getUrl(url), {..._getConfig()});
    return yield {status: response.status, data: response.data};
}

function _getUrl(url) {
    return App.APP_SERVER + App.API_VERSION + url;
}

function _getConfig() {
    return {}
}

export const ApiRequest = {
    get,
    post,
    put,
    del
};
