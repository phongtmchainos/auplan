import React from "react";
import "./Account.css";

export default class Search_Account extends React.Component {
    render() {
        return (
            <div className="search_account">
                <div className="card_user">
                    <div className="row">
                        <div className="col-xs-2 user_icon">
                            <img src={require('../../../../icons/ic_icon3.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                            <div className="name">
                                但野 茂出留
                            <p>@pixta_model</p>
                            </div>
                            <div className="inner">
                                <div className="fan">
                                    <img src={require('../../../../icons/ic_fan.png')} alt="" /><span>9</span>
                                </div>
                                <div className="post">
                                    <img src={require('../../../../icons/ic_post.png')} alt="" /><span>1107</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_user">
                    <div className="row">
                        <div className="col-xs-2 user_icon">
                            <img src={require('../../../../icons/ic_icon2.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                            <div className="name">
                                中条あやみ
                            <p><span><img src={require('../../../../icons/official.png')} alt="" /></span>@nakajo_ayami</p>
                            </div>
                            <div className="inner">
                                <div className="fan">
                                    <img src={require('../../../../icons/ic_fan.png')} alt="" /><span>45万</span>
                                </div>
                                <div className="post">
                                    <img src={require('../../../../icons/ic_post.png')} alt="" /><span>233</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_user">
                    <div className="row">
                        <div className="col-xs-2 user_icon">
                            <img src={require('../../../../icons/ic_icon.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                            <div className="name">
                                小田急百貨店 新宿店
                            <p><span><img src={require('../../../../icons/official.png')} alt="" /></span>@odakyu-dept</p>
                            </div>
                            <div className="inner">
                                <div className="fan">
                                    <img src={require('../../../../icons/ic_fan.png')} alt="" /><span>3.5万</span>
                                </div>
                                <div className="post">
                                    <img src={require('../../../../icons/ic_post.png')} alt="" /><span>96</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_user">
                    <div className="row">
                        <div className="col-xs-2 user_icon">
                            <img src={require('../../../../icons/ic_icon4.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                            <div className="name">
                                但野 茂出留
                            <p>@pixta_model</p>
                            </div>
                            <div className="inner">
                                <div className="fan">
                                    <img src={require('../../../../icons/ic_fan.png')} alt="" /><span>9</span>
                                </div>
                                <div className="post">
                                    <img src={require('../../../../icons/ic_post.png')} alt="" /><span>1107</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}