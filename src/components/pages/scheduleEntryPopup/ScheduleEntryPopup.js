import React from "react";
import "./ScheduleEntryPopup.css";

export default class ScheduleEntryPopup extends React.Component {
  render() {
    return (
      <div className="schedule-entry-popup">
        <div className="row page_header">
          <div className="cancel col-xs-3"><img src={require('../../../icons/close.png')} alt="" /></div>
          <div className="title col-xs-6">カレンダーを選択</div>
        </div>
        <div className="data_img">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4 left"><img src={require('../../../icons/data_img.png')} alt="" /> </div>
              <div className="col-xs-8 right">
                <div className="data">
                  <div className="date">4<span>月</span>27<span>日</span><span className="money">(金)</span></div>
                  <div className="hours">18:00-22:00 <span>本日開催です</span></div>
                  <div className="content">DeNA vs ヤクルト</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="cap">登録済カレンダー</div>
          <div className="container-fluid">
            <div className="cap_item">
              <div className="row cap_item_info">
                <div className="col-xs-1"><img className="ic_calander" src={require('../../../icons/ic_calander.png')}  alt="" /></div>
                <div className="col-xs-9 title">横浜ベイスターズ公式戦 2018</div>
                <div className="col-xs-2"><img className="image"  src={require('../../../icons/img.png')}  alt="" /></div>
              </div>
            </div>
            <div className="cap_item">
              <div className="row cap_item_info">
                <div className="col-xs-1"><img className="ic_calander" src={require('../../../icons/ic_calander.png')}  alt="" /></div>
                <div className="col-xs-9 title">横浜ベイスターズ公式戦 2018</div>
                <div className="col-xs-2"><img className="image"  src={require('../../../icons/img.png')}  alt="" /></div>
              </div>
            </div>
            <div className="cap_item">
              <div className="row cap_item_info">
                <div className="col-xs-1"><img className="ic_calander" src={require('../../../icons/ic_calander.png')} alt="" /></div>
                <div className="col-xs-9 title">横浜ベイスターズ公式戦 2018</div>
                <div className="col-xs-2"><img className="image"  src={require('../../../icons/img.png')} alt="" /></div>
              </div>
            </div>
            <div className="cap_item">
              <div className="row cap_item_info">
                <div className="col-xs-1"><img className="ic_calander" src={require('../../../icons/ic_calander.png')}  alt="" /></div>
                <div className="col-xs-9 title">横浜ベイスターズ公式戦 2018</div>
                <div className="col-xs-2"><img className="image"  src={require('../../../icons/img.png')}  alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <div className="footer_plus"><img src={require('../../../icons/plus.png')}  alt="" /></div>
          <div className="content">新しいカレンダーを作成</div>
        </div>
      </div>

    )
  }
}
