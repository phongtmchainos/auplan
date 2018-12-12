import React from "react";
import { Link } from "react-router-dom";
import "./EditPersonalInfo.css";

export default class editPersonalInfo extends React.Component {
    render() {
        return (
            <div id="edit_personal">
                <div className="edit_personal_header">
                    <div className="cancel" onClick={this.props.history.goBack}><img src={require('../../../icons/arrow-left.png')} alt="" /></div>
                    <div className="title">個人情報編集</div>
                </div>

                <div className="edit_personal_content">
                    <Link to="/my-page-edit">
                        <div className="menu">プロフィール<span><img src={require('../../../icons/arrown-right.png')} alt="" /></span></div>
                    </Link>
                    <Link to="/edit-phone">
                        <div className="menu">住所・電話番号<span><img src={require('../../../icons/arrown-right.png')} alt="" /></span></div>
                    </Link>
                    <Link to="/mail-password">
                        <div className="menu">メール・バスワード<span><img src={require('../../../icons/arrown-right.png')} alt="" /></span></div>
                    </Link>
                    <div className="menu">支払い方法 <span><img src={require('../../../icons/arrown-right.png')} alt="" /></span></div>
                </div>
            </div>
        )
    }
}