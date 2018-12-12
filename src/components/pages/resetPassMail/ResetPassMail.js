import React from "react";
import "./ResetPassMail.css";

export default class ResetPassMail extends React.Component {
    render() {
        return (
            <div id="ResetPassMail">
                <div className="cancel"><button><img src={require('../../../icons/cancel.png')} alt="" /></button></div>
                <div className="title">パスワードをリセット</div>
                <div className="content">
                    mi*******@a*****.**.** にメールを送信しました。メールに記載されたリンクをクリックすることでパスワードをリセットできます。
			        <br />
                    <br />
                    メールが届かない場合は、迷惑メールやスパムフォルダーなどもご確認ください。
		            </div>
                <div className="help"><span><img src={require('../../../icons/help.png')} alt="" /></span>メールが届いていませんか？</div>
            </div>

        )
    }
}