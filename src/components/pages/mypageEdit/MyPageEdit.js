import React from "react";
import "./MypageEdit.css";

export default class MyPageEdit extends React.Component {
  render() {
    return (
      <div className="mypage-edit">
        <div className=" my-page-edit-header">
          <div className="cancel col-xs-3">キャンセル</div>
          <div className="title col-xs-7">プロフィール編集</div>
          <div className="exit col-xs-2">完了</div>
        </div>
        <div className="photo">
          <div className="icon-camera">
            <img src={require('../../../icons/camera.png')}  alt="" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="user">
            <div className="user-icon">
              <img src={require('../../../icons/photo_user.png')}  alt="" />
              <div className="icon-camera">
                <img src={require('../../../icons/camera.png')}  alt="" />
              </div>
            </div>
          </div>
          <div className="field">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="control-label  col-xs-1" htmlFor="email"><img className="ic_field" src={require('../../../icons/user.png')} alt="" /></label>
                <div className="col-xs-11">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" defaultValue="宮島 太郎" />
                  <span className="form-control-feedback"><img src={require('../../../icons/delete.png')} alt="" /></span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label  col-xs-1" htmlFor="email"><img className="ic_field" src={require('../../../icons/pencil_edit.png')} alt="" /></label>
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" placeholder="自己紹介を追加する" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label  col-xs-1" htmlFor="email"><img className="ic_field" src={require('../../../icons/location.png')} alt="" /></label>
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" defaultValue="東京都渋谷区渋谷" />
                  <span className="form-control-feedback ic_arrown_right"><img src={require('../../../icons/arrown-right.png')} alt="" /></span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label  col-xs-1" htmlFor="email"><img className="ic_field" src={require('../../../icons/ic_birthday.png')} alt="" /></label>
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" placeholder="誕生日を追加する" />
                  <span className="form-control-feedback ic_arrown_right"><img src={require('../../../icons/arrown-right.png')} alt="" /></span>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label  col-xs-1" htmlFor="email"><img className="ic_field" src={require('../../../icons/web.png')} alt="" /></label>
                <div className="col-xs-11">
                  <input type="text" className="form-control" id="email" placeholder="Webサイト・SNSのURLを追加する" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}