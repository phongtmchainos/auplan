import React from 'react';
import CreateAccount from '../createAccount/CreateAccount';
import ModalPage from "../../commons/modalPage/ModalPage";
import PasswordReissue from "../passwordReissue/PasswordReissue";
import BaseModalComponent from "../../commons/BaseModalComponent";

import "./Login.css";

export default class Login extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="login" className="modal-custom">
                    <div>
                        <div className="cancel">
                            <div onClick={() => this.closeModal()}>
                                <img className="cancel-ic" src={require('../../../icons/close.png')} alt="close"/>
                            </div>
                        </div>
                        <div className="logo">
                            <img className="logo-ic" src={require('../../../icons/logo_bg.png')} alt="logo"/>
                        </div>
                    </div>
                    <form className="field">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="メールアドレス"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="パスワード"/>
                        </div>
                        <div className="help">
                            <div className="forgetPass" onClick={() => this.refs.passwordReissue.toggleModal()}>
                            <span>
                              <img className="help-ic" src={require('../../../icons/help.png')} alt=""/>
                            </span>パスワードをお忘れですか
                            </div>
                        </div>
                    </form>
                    <div className="ground-button">
                        <div className="btn-m">
                            <button>ログインする</button>
                        </div>
                        <div className="fb">
                            <a href={ this.config.LOGIN_FACEBOOK }>
                                <button>
                                    <span><img className="facebook-ic" src={require('../../../icons/facebook_icon.png')} alt="Facebook login"/></span>
                                    Facebookでサインインする
                                </button>
                            </a>
                        </div>
                        {/* <div className="btn-m btn-red">
                            <a href={ this.config.LOGIN_TWITTER }><button>Twitter</button></a>
                        </div>
                        <div className="btn-m btn-red">
                            <a href={ this.config.LOGIN_GOOGLE }><button>Google</button></a>
                        </div>
                        */}
                        <div className="btn-m btn-red">
                            <button onClick={() => this.refs.createAccount.toggleModal()}>新規登録する</button>
                        </div>
                    </div>
                    <CreateAccount ref={'createAccount'}/>
                    <PasswordReissue ref={'passwordReissue'}/>
                </div>
            </ModalPage>
        )
    }
}