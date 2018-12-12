import React from "react";
import "./MailPassword.css";

export default class MailPassword extends React.Component {
    render() {
        return (
            <body id="mail_pass">
            <div className="mail_pass_header">
                <div className="cancel" onClick={this.props.history.goBack}>
                    <img src={require('../../../icons/arrow-left.png')} alt=""/>
                </div>
                <div className="title">メール・バスワード</div>
            </div>
            <div className="content-address">
                <div className="mailadress">
                    <div className="cap">メールアドレス</div>
                    <form className="field">
                        <div className="form-group">
                            <input type="password" className="form-control" alt="" placeholder="メールアドレス"/>
                        </div>
                    </form>
                    <div className="text">
                        メールアドレスを変更すると確認メールが送信されます。 メール内のURLをクリックすると変更完了です。
                    </div>
                </div>
                <div className="password">
                    <div className="cap">パスワード</div>
                    <form className="field">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="現在のパスワード" alt=""/>
                            <span className="form-control-feedback"><img src={require('../../../icons/delete.png')}
                                                                         alt=""/></span>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="新しいパスワード" alt=""/>
                            <span className="form-control-feedback"></span>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="新しいパスワード（確認）" alt=""/>
                            <span className="form-control-feedback"></span>
                        </div>
                    </form>
                    <div className="text">
                        パスワードを設定したい場合は上記をすべて入力してください。
                    </div>
                </div>
            </div>
            <div className="btn-m">
                <button>登録する</button>
            </div>
            </body>
        )
    }
}