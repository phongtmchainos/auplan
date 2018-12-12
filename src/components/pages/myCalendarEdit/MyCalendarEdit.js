import React from "react";
import "./MyCalendarEdit.css";
import ModalPage from "../../commons/modalPage/ModalPage";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class MyCalendarEdit extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="my-calendar-edit" className="modal-custom">
                    <div className="header">
                        <div className="cancel"><img src="./img/arrown.png" alt=""/></div>
                        <div className="title">プロ野球 横浜DeNAベイスターズ公式戦</div>
                    </div>
                    <div className="container-fluid">
                        <div className="user">
                            <div className="user-icon">
                                <img className="delete-ic" src={require('../../../icons/user-icon.png')} alt=""/>
                            </div>
                            <div className="name">
                                宮島 太郎
                                <p>@auplan</p>
                            </div>
                        </div>
                    </div>
                    <div className="edit">
                        <div className="container-fluid">
                            <div className="menu"><span><img className="delete-ic"
                                                             src={require('../../../icons/ic_edit.png')}
                                                             alt=""/></span>カレンダー内容を編集する <span className="arrow"><img
                                className="delete-ic" src={require('../../../icons/arrown-right.png')} alt=""/></span>
                            </div>
                        </div>
                    </div>
                    <div className="color">
                        <div className="container-fluid">
                            <div className="menu"><span><img className="delete-ic"
                                                             src={require('../../../icons/ic_color.png')}
                                                             alt=""/></span>カレンダー内容を編集する <span className="arrow"><img
                                className="delete-ic" src={require('../../../icons/arrown-right.png')} alt=""/></span>
                            </div>
                        </div>
                    </div>
                    <div className="alarm">
                        <div className="container-fluid">
                            <div className="title">通知</div>
                            <div className="menu bold"><span><img className="delete-ic"
                                                                  src={require('../../../icons/ic_alart.png')} alt=""/></span>30分前 <span
                                className="arrow"><img className="delete-ic"
                                                       src={require('../../../icons/arrown-right.png')} alt=""/></span>
                            </div>
                            <div className="menu"><span><img className="delete-ic"
                                                             src={require('../../../icons/ic_plus.png')}
                                                             alt=""/></span>別の通知を追加 <span className="arrow"><img
                                className="delete-ic" src={require('../../../icons/arrown-right.png')} alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalPage>
        )
    }
}