import React from "react";
import "./ScheduleNewEntry.css";

export default class ScheduleNewEntry extends React.Component {
  render() {
    return (
      <div className="schedule-new-entry">
        <div className="row page_header">
          <div className="cancel col-xs-2"><img src={require('../../../icons/close.png')}  alt=""/></div>
          <div className="title col-xs-8">新規スケジュール登録</div>
        </div>
        <div className="title_1">
          <div className="container-fluid">スケジュールタイトルを入力</div>
        </div>
        <div className="img">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3 img_tag">
                <div className="img_item">
                  <img src={require('../../../icons/plus.png')}  alt=""/>
                  <p>画像を追加</p>
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_item">
                  <img src={require('../../../icons/plus.png')}  alt=""/>
                  <p>画像を追加</p>
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_item">
                  <img src={require('../../../icons/plus.png')}  alt=""/>
                  <p>画像を追加</p>
                </div>
              </div>
              <div className="col-xs-3 img_tag">
                <div className="img_item">
                  <img src={require('../../../icons/plus.png')}  alt=""/>
                  <p>画像を追加</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="date_time">
          <div className="title container-fluid">
            <div className="row">
              <div className="cap col-xs-6">詳細情報</div>
              <div className="help col-xs-6"><img src={require('../../../icons/ic_help.png')}  alt="" />ヘルプ</div>
            </div>
          </div>
          <div className="container-fluid">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label col-xs-1" htmlFor="email"><img className="ic_clock" src={require('../../../icons/ic_clock.png')}  alt=""/></label>
                <div className="col-xs-11">
                  <input type="email" className="form-control" id="email" defaultValue="2018年9月2日（日）" />
                  <span className="form-control-feedback">18:00</span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-xs-1" htmlFor="email" />
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" defaultValue="2018年9月2日（日）" />
                  <span className="form-control-feedback">19:00</span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-xs-1" htmlFor="email" />
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" defaultValue="終日" />
                  <span className="form-control-feedback">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-xs-1" htmlFor="email"><img className="ic_repeart" src={require('../../../icons/ic_repeart.png')}  alt=""/></label>
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" defaultValue="繰り返さない" />
                  <span className="form-control-feedback"><img src={require('../../../icons/arrown-right.png')}  alt=""/></span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="inner">
          <div className="row title">
            <div className="container-fluid ">
              <div className="cap col-xs-6">詳細情報</div>
              <div className="help col-xs-6"><img src={require('../../../icons/ic_help.png')}  alt="" />ヘルプ</div>
            </div>
          </div>
          <div className="container-fluid ">
            <div>
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_clock" src={require('../../../icons/ic_edit.png')}  alt=""/></label>
                  <div className="col-xs-11">
                    <input type="email" className="form-control" id="email" placeholder="スケジュールの説明を追加する" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_clock" src={require('../../../icons/ic_location.png')}  alt=""/></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" placeholder="場所を追加する" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_clock" src={require('../../../icons/ic_link.png')}  alt=""/></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" placeholder="Webサイト・SNSのURLを追加する" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_coint" src={require('../../../icons/ic_coint.png')}  alt=""/></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" placeholder="スケジュールの価格" defaultValue="スケジュールの価格" />
                    <span className="form-control-feedback">0円</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-xs-1" htmlFor="email"><img className="ic_clock" src={require('../../../icons/ic_web.png')}  alt=""/></label>
                  <div className="col-xs-11">
                    <input type="text" className="form-control" id="email" placeholder="Webサイト・SNSのURLを追加する" defaultValue="公開" />
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
              <div class="button">登録する</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
