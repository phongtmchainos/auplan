import React from "react";
import ModalPage from "../../commons/modalPage/ModalPage";
import SendAuthenMail from "../sendAuthenMail/SendAuthenMail";
import "./PasswordReissue.css";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class PasswordReissue extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="PasswordReissue"className="modal-custom">
                    <div className="cancel"><button onClick={() => this.closeModal()}><img src={require('../../../icons/close.png')} alt="" /></button></div>
                    <div className="PasswordReissue-content" >
                        <div className="title">パスワードをリセット</div>
                        <div className="content">
                            パスワードをリセットするメールを送ります
	                    </div>
                        <form className="field">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="メールアドレスを入力してください" alt="" />
                            </div>
                        </form>
                        <div className="btn-m">
                            <button onClick={() => this.refs.resetAPass.toggleModal()}>設定する</button>
                        </div>
                    </div>
                </div>
                <SendAuthenMail ref={'resetAPass'} />
            </ModalPage>
        )
    }
}