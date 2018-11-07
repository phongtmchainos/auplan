import React from 'react';
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <div className="container-fluid">
          <div className="cancel">
            <div>
              <img className="cancel-ic" src={require('../../../icons/cancel.png')} alt=""/>
            </div>
          </div>
          <div className="logo">
            <img className="logo-ic" src={require('../../../icons/logo_bg.png')} alt="" />
          </div>
          <form className="field">
            <div className="form-group">
              <input type="text" className="form-control" id="username" placeholder="電話番号、メールアドレスまたはユーザー名" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="パスワード" />
            </div>
            <div className="help">
            <span>
              <img className="help-ic" src={require('../../../icons/help.png')} alt="" />
            </span>パスワードをお忘れですか</div>
          </form>
          <div className="btn-m">
            <button>ログインする</button>
          </div>
          <div className="fb">
            <button>
            <span>
              <img className="facebook-ic" src={require('../../../icons/facebook_icon.png')} alt="" />
            </span>Facebookでサインインする
            </button>
          </div>
        </div>
      </div>
    )
  }
}