import React from "react";
import "./Mypage.css";
import {Link} from "react-router-dom";
import SearchCalendar from "../../commons/search/calendar/Calendar";
import SearchSchedule from "../../commons/search/schedule/Schedule";
import TopScreen from "../../layouts/baseScreen/TopScreen";
import BasePageComponent from "../../commons/BasePageComponent";

export default class Mypage extends BasePageComponent {
    render() {
        return (
            <div className="mypage main-component">
                <TopScreen/>
                <div className="mypage-header">
                </div>
                <div id="content">
                    <div className="card_schedule">
                        <div className="container-fluid">
                            <div className="user">
                                <div className="row">
                                    <div className="user_icon col-xs-4">
                                        <img src={require('../../../icons/user_icon.png')} alt=""/>
                                    </div>
                                    <div className="col-xs-4">
                                        <div className="name">宮島 太郎</div>
                                        <div className="nick">@auplan</div>
                                    </div>
                                    <div className="col-xs-4 private">
                                        <Link to="my-page-edit">
                                            <img src={require('../../../icons/ic_edit1.png')} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="entry">
                                <div className="list">
                                    <div className="row">
                                        <div className="col-xs-3 ">
                                            <div className="list_item">
                                                <div> ファン数</div>
                                                <p> 84</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 center">
                                            <div className="list_item">
                                                <div> 投稿数</div>
                                                <p> 987</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 ">
                                            <div className="list_item">
                                                <div> フォロー数</div>
                                                <p> 3325</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <div className="container-fluid">
                            自己紹介文入ります自己紹介文入ります自己紹介文入 br
                            ります自己紹介文入ります。
                            自己紹介文入ります自己紹介文入ります。
                        </div>
                    </div>

                    {/* after login  */}
                    <div className="cv">
                        <div className="container-fluid">
                            <div className="cv_bnt cv_bnt2">
                                <Link to={"/calendar-new-entry"}>
                                    <div className="button">
                                        <span><img src={require('../../../icons/ic_calender1.png')} alt=""/></span>カレンダー新規登録
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="ubility">
                        <div className="container-fluid">
                            <form className="form-horizontal">
                                <div className="text-feild">
                                    <span className="form-control-start"><img
                                        src={require('../../../icons/ic_search.png')} alt=""/></span>
                                    <input type="text" className="form-control search-input"/>
                                    <div className="form-control-feedback">
                                        <img className="delete-ic search-close" src={require('../../../icons/ic_delete.png')} alt=""/>
                                    </div>
                                </div>
                                <label className="control-label" htmlFor="email"><img
                                    src={require('../../../icons/ic_sort2.png')} alt=""/></label>
                            </form>
                        </div>
                    </div>
                    <div className="tab">
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#calendar_mypage">カレンダー</a></li>
                            <li><a data-toggle="tab" href="#schedule_mypage">スケジュール</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="calendar_mypage" className="tab-pane fade in active ">
                                <SearchCalendar>
                                    <div></div>
                                </SearchCalendar>
                            </div>
                            <div id="schedule_mypage" className="tab-pane fade">
                                <SearchSchedule />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
