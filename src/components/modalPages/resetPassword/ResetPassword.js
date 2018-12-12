import React from "react";
import ModalPage from "../../commons/modalPage/ModalPage";
import "./ResetPassword.css";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class ResetPassword extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="Resetting_a_password" className="modal-custom">
                    <div className="cancel" onClick={() => this.closeModal()}>
                        <button><img src={require('../../../icons/close.png')} alt=""/></button>
                    </div>
                    <div className="Resetting_a_password_content">
                        <div className="title">パスワードをリセット</div>
                        <div className="content">
                            <span>新しいパスワードを入力してください。</span>
                            <span>※６文字以上の英数字</span>
                        </div>
                        <form className="field">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="パスワード" alt=""/>
                            </div>
                        </form>
                        <div className="btn-m">
                            <button>設定する</button>
                        </div>
                    </div>
                </div>
            </ModalPage>
        )
    }
}