import React from "react";
import './SyncCalendarSetting.css';

export default class SyncCalendarSetting extends React.Component {
    render() {
        return (
            <div className="sync-calendar-setting">
                <div className="title">同期するカレンダーサードスを選択してください。</div>
                <div className="calendar">
                    <div className="cap">Googleカレンダー</div>
                    <img src={require('../../../icons/arrown-right.png')} alt="" />
                </div>
            </div>
        )
    }
}