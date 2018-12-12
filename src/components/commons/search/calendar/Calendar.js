import React from "react";
import { Link } from "react-router-dom";
import "./Calendar.css";

export default class Search_Calendar extends React.Component {
    render() {
        return (
            <div className="search_calendar">
                <div className="calendar_item">
                    <div className="calendar-ic" >
                        <img src={require('../../../../icons/ic_calender_blue.png')} alt="" />
                        <span className="title">ラフォーレ原宿イベントカレンダー</span>
                    </div>
                    <div className="calendar_content">
                        <Link to="/calendar-detail">
                            <div className="name">
                                <div className="row">
                                    <div className="col-xs-2"><img className="user-ic" src={require('../../../../icons/icon.png')} alt="" /></div>
                                    <div className="col-xs-6">
                                        <div className="fullname">宮島 太郎</div>
                                        <div className="username">@auplan</div>
                                    </div>
                                    <div className="col-xs-4 private">
                                        <img className="public-ic" src={require('../../../../icons/ic_public.png')} alt="" />公開
                                    </div>
                                </div>
                            </div>
                            <div className="img">
                                <img src={require('../../../../icons/img_1.png')} alt="" />
                            </div>
                            <div className="prince_icon">
                                <div className="row">
                                    <div className="col-xs-4 prince">￥150</div>
                                    <div className="col-xs-3">
                                        <div className="row d_flex_center">
                                            <div className="col-xs-5 img_follow"> <img src={require('../../../../icons/follow.png')} alt="" /></div>
                                            <div className="col-xs-5">989</div>
                                        </div>
                                    </div>

                                    <div className="col-xs-3">
                                        <div className="row d_flex_center">
                                            <div className="col-xs-5"><img className="like-ic" src={require('../../../../icons/ic_like2.png')} alt="" /></div>
                                            <div className="col-xs-5">3346</div>
                                        </div>
                                    </div>
                                    <div className="col-xs-2"><img className="share-ic" src={require('../../../../icons/share.png')} alt="" /> </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/schedule-detail">
                            <div className="calendar">
                                <div className="title">
                                    直近のスケジュール
                            </div>
                                <div className="content">
                                    ピクサー・ザ・フレンドシップ <br />
                                    ～仲間といっしょに冒険の世界へ
                                    <div className="date">
                                        <div className="from">4 <span>月</span> 28 <span>日</span> <span className="blue">(土)</span></div>
                                        <img src={require('../../../../icons/arrown-right.png')} alt="" />
                                        <div className="to">5 <span>月</span> 6 <span>日</span> <span className="red">(日)</span></div>
                                    </div>
                                    <div className="house">9:00 - 18:30<span>最終日は17:00まで</span></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="calendar_item">
                    <div className="calendar-ic" >
                        <img src={require('../../../../icons/ic_calender_blue.png')} alt="" />
                        <span className="title">ラフォーレ原宿イベントカレンダー</span>
                    </div>
                    <div className="calendar_content">
                        <Link to="/calendar-detail">
                            <div className="name">
                                <div className="row">
                                    <div className="col-xs-2"><img className="user-ic" src={require('../../../../icons/icon.png')} alt="" /></div>
                                    <div className="col-xs-6">
                                        <div className="fullname">宮島 太郎</div>
                                        <div className="username">@auplan</div>
                                    </div>
                                    <div className="col-xs-4 private">
                                        <img className="public-ic" src={require('../../../../icons/ic_public.png')} alt="" />公開
                                    </div>
                                </div>
                            </div>
                            <div className="img">
                                <img src={require('../../../../icons/img_1.png')} alt="" />
                            </div>
                            <div className="prince_icon">
                                <div className="row">
                                    <div className="col-xs-4 prince">￥150</div>
                                    <div className="col-xs-3">
                                        <div className="row d_flex_center">
                                            <div className="col-xs-5 img_follow"> <img src={require('../../../../icons/follow.png')} alt="" /></div>
                                            <div className="col-xs-5">989</div>
                                        </div>
                                    </div>

                                    <div className="col-xs-3">
                                        <div className="row d_flex_center">
                                            <div className="col-xs-5"><img className="like-ic" src={require('../../../../icons/ic_like2.png')} alt="" /></div>
                                            <div className="col-xs-5">3346</div>
                                        </div>
                                    </div>
                                    <div className="col-xs-2"><img className="share-ic" src={require('../../../../icons/share.png')} alt="" /> </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/schedule-detail">
                            <div className="calendar">
                                <div className="title">
                                    直近のスケジュール
                            </div>
                                <div className="content">
                                    ピクサー・ザ・フレンドシップ <br />
                                    ～仲間といっしょに冒険の世界へ
                                    <div className="date">
                                        <div className="from">4 <span>月</span> 28 <span>日</span> <span className="blue">(土)</span></div>
                                        <img src={require('../../../../icons/arrown-right.png')} alt="" />
                                        <div className="to">5 <span>月</span> 6 <span>日</span> <span className="red">(日)</span></div>
                                    </div>
                                    <div className="house">9:00 - 18:30<span>最終日は17:00まで</span></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
               
            </div>
        )
    }
}
