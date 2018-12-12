import React from "react";
import ModalPage from "../../commons/modalPage/ModalPage";
import "./SendAuthenMail.css";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class SendAuthenMail extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="Send_authentication" className="modal-custom">
                    <div className="cancel"><button onClick={() => this.closeModal()}><img src={require('../../../icons/close.png')} alt="" /></button></div>
                    <div className="title">パスワードをリセット</div>
                    <div className="content">
                        <strong>mi*******@a*****.**.**</strong> にメールを送信しました。メールに記載されたリンクをクリックすることでパスワードをリセットできます。
			            <br />
                        <br />
                        メールが届かない場合は、迷惑メールやスパムフォルダーなどもご確認ください。
		            </div>
                    <div className="help"><span><img src={require('../../../icons/help.png')} alt="" /></span>メールが届いていませんか？</div>
                </div>
            </ModalPage>
        )
    }
}