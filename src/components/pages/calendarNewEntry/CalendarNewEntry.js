import React from "react";
import "./CalendarNewEntry.css";

export default class Notice extends React.Component {
  render() {
    return (
      <div className="calendar-new-entry">
        <div className="row header">
          <div className="cancel col-xs-2"><img src={require('../../../icons/close.png')} alt="" /></div>
          <div className="title col-xs-8">新規カレンダー登録</div>
        </div>
        <div className="main">
          <div className="title">プロ野球 横浜DeNAベイスターズ公式戦</div>
        </div>
        <div className="img">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3 img_tag">
                <div className="img_active">
                  <img src={require('../../../icons/img_1.png')} alt="" />
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_active">
                  <img src={require('../../../icons/img_2.png')} alt="" />
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_active">
                  <img src={require('../../../icons/img_3.png')} alt="" />
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_item">
                  <img className="ic_icon" src={require('../../../icons/plus.png')} alt="" />
                  <p>画像を追加</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="row title">
            <div className="container-fluid ">
              <div className="cap col-xs-6">詳細情報</div>
              <div className="help col-xs-6"><img src={require('../../../icons/ic_help.png')} alt="" />ヘルプ</div>
            </div>
          </div>
          <div className="container-fluid ">
            <div>
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_edit" src={require('../../../icons/ic_edit.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="email" className="form-control" id="email" defaultValue="プロ野球 横浜DeNAベイスターズ公式戦 の2018年度版カレンダーです。" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_edit" src={require('../../../icons/ic_location.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" defaultValue="横浜スタジアム
							〒231-0022 神奈川県横浜市中区横浜公園" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_edit" src={require('../../../icons/ic_link.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" defaultValue="www.baystars.co.jp/game/schedule/" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_coint" src={require('../../../icons/ic_coint.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" defaultValue="カレンダーの価格" />
                    <span className="form-control-feedback">300円</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_edit" src={require('../../../icons/follow.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" defaultValue="購入・フォロー後に スケジュール表示" disabled />
                    <span className="form-control-feedback">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_edit" src={require('../../../icons/ic_web.png')} alt="" /></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" defaultValue="公開" disabled />
                    <span className="form-control-feedback">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>
              </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <div className="container-fluid">
            <div className="text">利用規約が入ります。あああああああああああああああああああああああああああああああああああああああああああああああああああ...（以下略）</div>
            <div className="btn_m">
              <div className="button">登録する</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
