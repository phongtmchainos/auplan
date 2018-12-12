import React from "react";
import ModalPage from "../../commons/modalPage/ModalPage";
import ConfirmAccountRegis from '../confirmAccountRegis/ConfirmAccountRegis';
import "./CreateAccount.css";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class createAccount extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="Create_new_account" className="modal-custom">
                    <div className="Create_new_account_content">
                        <div className="cancel">
                            <button><img src={require('../../../icons/close.png')} onClick={() => this.closeModal()}
                                         alt=""/></button>
                        </div>
                        <div className="title">Auplanアカウントの作成</div>
                        <form className="field">
                            <div className="form-group">
                                <input type="text" name={"password"} className="form-control" placeholder="ユーザー名"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name={"email"} className="form-control" placeholder="メイル"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="メールアドレス"/>
                            </div>
                        </form>
                        <div className="btn-m">
                            <button onClick={() => this.refs.confirmAccountRegis.toggleModal()}>登録する</button>
                        </div>
                        <div className="content_page">
                            アカウントを作成すると、<span>利用規約</span> および アカウントを作成すると、利用規約 および <span>Cookieの
		                        使用</span> を含む <span>プライバシーポリシー</span> に同意したことにな
                            ります。あなたのメールアドレスや電話番号を連絡先
                            に保存しているAuplanユーザーに通知などが表示さ
                            れます。
                        </div>
                        <div className="help"><span><img src={require('../../../icons/ic_privacy.png')} alt=""/></span>プライバシーの設定
                        </div>
                    </div>
                    <ConfirmAccountRegis ref="confirmAccountRegis"/>
                </div>
            </ModalPage>
        )
    }
}