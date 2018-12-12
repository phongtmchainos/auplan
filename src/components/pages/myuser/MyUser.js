import React from "react";
import "./MyUser.css";
import { Link } from "react-router-dom";
import SearchCalendar from "../../commons/search/calendar/Calendar";
import SearchSchedule from "../../commons/search/schedule/Schedule";

export default class Mypage extends React.Component {
  render() {
    return (
      <div className="myuser">
        <div className=" myuser-header">
          <div className="cancel" onClick={this.props.history.goBack}>
            {/* <div className="cancel"> */}
            <img src={require('../../../icons/ic_back.png')} alt="" />
          </div>
          <div className="user">
            <div className="user_icon col-xs-4">
              <img src={require('../../../icons/user_icon.png')} alt="" />
            </div>
            <div className="col-xs-4">
              <div className="name">宮島 太郎</div>
              <div className="nick">@auplan</div>
            </div>
            <div className="col-xs-4 private">
              <Link to="my-page-edit">
                <img src={require('../../../icons/ic_edit1.png')} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="card_schedule">
            <div className="container-fluid">

              <div className="entry">
                <div className="list">
                  <div className="row">
                    <div className="list_item col-xs-4">
                      <div> ファン数</div>
                      <p> 84</p>
                    </div>
                    <div className="list_item col-xs-4">
                      <div> 投稿数</div>
                      <p> 987</p>
                    </div>
                    <div className="list_item col-xs-4">
                      <div> フォロー数</div>
                      <p> 3325</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* not logged in */}
          <div className="cv">
            <div className="container-fluid">
              <div className="cv_bnt">
                <div className="button">ファンになる</div>
              </div>
            </div>
          </div>
          {/* -------------------- */}
          <div className="more">
            <div className="container-fluid">
              自己紹介文入ります自己紹介文入ります自己紹介文入 br
              ります自己紹介文入ります。
              自己紹介文入ります自己紹介文入ります。
              </div>
          </div>
          {/* logged in */}
          {/* <div className="cv">
            <div className="container-fluid">
              <div className="cv_bnt cv_bnt2">
                <div className="button">
                  <Link to="/calendar-new-entry">
                  <span><img src={require('../../../icons/ic_calender1.png')} alt="" /></span>ファンになる
                  </Link>
                  </div>
              </div>
            </div>
          </div> */}
          {/* ---------------- */}
          <div className="ubility">
            <div className="container-fluid">
              <form className="form-horizontal">
                <div className="text-feild">
                  <span className="form-control-start"><img src={require('../../../icons/ic_search.png')} alt="" /></span>
                  <input type="text" className="form-control" />
                </div>
                <label className="control-label" htmlFor="email"><img src={require('../../../icons/ic_sort2.png')} alt="" /></label>
              </form>
            </div>
          </div>
          <div className="tab">
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#calendar_myuser">カレンダー</a></li>
              <li ><a data-toggle="tab" href="#schedule_myuser">スケジュール</a></li>
            </ul>
            <div className="container-fluid">
              <div className="tab-content">
                <div id="calendar_myuser" className="tab-pane fade in active ">
                  <SearchCalendar />
                </div>
                <div id="schedule_myuser" className="tab-pane fade ">
                  <SearchSchedule />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
