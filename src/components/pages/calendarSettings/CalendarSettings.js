import React from "react";
import {Link} from "react-router-dom";
import ColorPalet from "../../modalPages/colorPalet/ColorPalet";
import "./CalendarSettings.css";

export default class calendarSetting extends React.Component {
    render() {
        return (
            <div id="calendarSetting">
                <div className=" header">
                    <div className="cancel" onClick={this.props.history.goBack}><img src={require('../../../icons/arrown.png')} alt=""/></div>
                    <div className="title">プロ野球 横浜DeNAベイスターズ公式戦</div>
                </div>
                <div className="container-fluid">
                    <div className="user">
                        <div className="user-icon">
                            <img src={require('../../../icons/user-icon.png')} alt=""/>
                        </div>
                        <div className="name">
                            宮島 太郎
                            <p>@auplan</p>
                        </div>
                    </div>
                </div>
                <Link to="/calendar-detail">
                    <div className="edit">
                        <img className="ic_edit" src={require('../../../icons/ic_edit.png')} alt=""/>
                        カレンダー内容を編集する
                        <img className="arrow" src={require('../../../icons/arrown-right.png')} alt=""/>
                    </div>
                </Link>
                <div className="color" onClick={() => {
                    this.refs.colorPalet.toggleModal()
                }}>
                    <img className="ic_color" src={require('../../../icons/ic_color.png')} alt=""/>
                    カレンダー内容を編集する
                    <img className="arrow" src={require('../../../icons/arrown-right.png')} alt=""/>
                </div>

                <div className="alarm">
                    <div className="title">通知</div>
                    <div className="menu">
                        <img className="ic_edit" src={require('../../../icons/ic_alart.png')} alt=""/>
                        30分前
                        <img className="arrow" src={require('../../../icons/arrown-right.png')} alt=""/>
                    </div>
                    <div className="menu">
                        <img className="ic_edit" src={require('../../../icons/ic_plus.png')} alt=""/>
                        別の通知を追加
                        <img className="arrow" src={require('../../../icons/arrown-right.png')} alt=""/>
                    </div>
                </div>
                <ColorPalet ref={'colorPalet'}/>
            </div>
        )
    }
}