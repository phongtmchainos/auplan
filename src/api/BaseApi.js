import App from '../configs/App';
const axios = require('axios');

function* get(url, params = {}) {
  let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  let fullUrl = Object.keys(params).length ? `${_getUrl(url)}?${query}` : _getUrl(url);
  let response = yield axios.get(fullUrl, {config: _getHeader()});
  yield console.log(response);
  // return yield {status: response.status, data: response.data};
}

function* post(url, params) {
  let response = yield axios.post(_getUrl(url), params, {config: _getHeader()});
  return yield {status: response.status, data: response.data};
}

function* put(url, params) {
  let response = yield axios.put(_getUrl(url), params, {config: _getHeader()});
  return yield {status: response.status, data: response.data};
}

function* del(url) {
  let response = yield axios.delete(_getUrl(url), {config: _getHeader()});
  return yield {status: response.status, data: response.data};
}

function _getUrl(url) {
  return App.APP_SERVER + App.API_VERSION + url;
}

function _getHeader() {
  return {
    'Content-Type': 'text/plain',
    'Access-Control-Expose-Headers': 'Access-Control-*',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Headers' : 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  }
}

export const BaseApi = {
  get,
  post,
  put,
  del
};
