export default class App {

  // Log config
  static ENABLE_LOG_INFO = true;
  static ENABLE_LOG_ERROR = true;

  // Common defined
  static APP_SERVER = 'https://staging.auplan.net';
  static API_VERSION = '';
  static CLIENT_ID = '';
  static CLIENT_SECRET = '';
  static ACCESS_TOKEN = '';

  // Login defined
  static LOGIN_FACEBOOK = App.APP_SERVER + '/users/auth/facebook/';
  static LOGIN_TWITTER = App.APP_SERVER + '/users/auth/twitter/';
  static LOGIN_GOOGLE = App.APP_SERVER + '/users/auth/google_oauth2/';
  static LOGIN_LOGIN = App.APP_SERVER + '/users/session/email/login/';

}
