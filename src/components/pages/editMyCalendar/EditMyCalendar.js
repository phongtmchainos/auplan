import React from "react";
import {Link} from "react-router-dom";
import './EditMyCalendar.css'
import BaseModalComponent from "../../commons/BaseModalComponent";
import ModalPage from "../../commons/modalPage/ModalPage";

export default class EitMyCalendar extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div className="edit-my-calendar">
                    <div className="edit_header cancel" onClick={() => this.closeModal()}>
                        <img src={require('../../../icons/close.png')} alt="Close"/>
                    </div>
                    <div className="calendar">
                        <img src={require('../../../icons/ic_calender.png')} alt="ic_calender"/>月
                    </div>
                    <div className="calendar_active">
                        <img src={require('../../../icons/ic_list_48.png')} alt="ic_list_48"/>リスト
                    </div>
                    <div className="title_calendar">
                        <Link to="calendar-settings">
                            <div className="items">
                                <img className="ic_color" src={require('../../../icons/ic_yellow.png')} alt=""/>
                                カレンダータイトルカレンダータイト...
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')}
                                     alt=""/>
                            </div>
                        </Link>
                        <Link to="calendar-settings">
                            <div className="items">
                                <img className="ic_color" src={require('../../../icons/ic_blue.png')} alt=""/>
                                カレンダータイトル
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')}
                                     alt=""/>
                            </div>
                        </Link>
                        <Link to="calendar-settings">
                            <div className="items">
                                <img className="ic_color" src={require('../../../icons/ic_blue_2.png')} alt=""/>
                                カレンダータイトルカレンダー
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')}
                                     alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="data">
                        <Link to="sync-calendar-setting">
                            <div className="data_item">
                                <img className="ic_reload" src={require('../../../icons/ic_reload.png')} alt=""/>
                                同期カレンダーアプリ設定
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')} alt=""/>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="data_item">
                                <img className="ic_icon" src={require('../../../icons/ic_setting.png')} alt=""/>
                                設定
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')} alt=""/>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="data_item">
                                <img className="ic_icon" src={require('../../../icons/ic_help_48px.png')} alt=""/>
                                ヘルプ
                                <img className="ic_arrow_right" src={require('../../../icons/arrown-right.png')} alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
            </ModalPage>
        )
    }
}