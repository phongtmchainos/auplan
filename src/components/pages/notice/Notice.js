import React from "react";
import "./Notice.css";
import {Link} from "react-router-dom";

export default class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            isShowModal: false
        }
    }

    render() {
        return (
            <div id="notice">
                <div className=" notice_header">
                    {/* <div className="cancel col-xs-4" onClick={()=>this.closeModal()}>キャンセル</div> */}
                    <div className="title">お知らせ</div>
                    {/* <div className="exit col-xs-4"><img src={require('../../../icons/ic_menu.png')} alt="ic_menu" /></div> */}
                </div>
                <div className="notice_content">
                    {/* cái nào chưa đọc thì cho thêm class noRead */}
                    <div className="notice_items noRead">
                        <div className="container-fluid">
                            <div className="time">
                                たった今
                            </div>
                            <div className="user ">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt="icon"/>
                                </div>
                                <div className="user_content">
                                    <Link to="/my-user">
                                        <div className="user_name">宮島 太郎 <span>さんが日付を変更しました。</span></div>
                                    </Link>
                                    <div className="calander">
                                        <span><img src={require('../../../icons/ic_calender_blue.png')}
                                                   alt="ic_calender_blue"/></span>
                                        プロ野球 横浜DeNAベイスターズ公式戦
                                    </div>
                                    <Link to="/calendar-detail">
                                        <div className="date_houser">
                                            <div className="date">
                                                4 <span>月</span> 28 <span>日</span> <span
                                                className="date_from">(土)</span>
                                                <img src={require('../../../icons/arrown-right.png')}
                                                     alt="arrown-right"/>
                                                5 <span>月</span> 6 <span>日</span> <span className="date_to">(日)</span>
                                                <span className="date_state">に変更</span>
                                            </div>
                                            <div className="hours">9:00-18:30</div>
                                        </div>
                                    </Link>
                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt="ic follow"/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt="ic_like2"/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt="ic_like2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notice_items notice_items1">
                        <div className="container-fluid">
                            <div className="time">
                                4時間前
                            </div>
                            <div className="user">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt="icon"/>
                                </div>
                                <div className="user_content">
                                    <div className="user_name">Miyashima hanako <span>さんが時間を変更しました。</span></div>
                                    <Link to="/schedule-detail">
                                        <div className="calander">
                                            <span><img src={require('../../../icons/ic_schedule_48px.png')}
                                                       alt="ic_schedule_48px"/></span>
                                            ピクサー・ザ・フレンドシップ <br/>～仲間といっしょに冒険の世界へ
                                        </div>
                                        <div className="date_houser">

                                            <div className="date">
                                                4 <span>月</span> 28 <span>日</span> <span>(土)</span>
                                                <img src={require('../../../icons/ic_arrow_right.png')}
                                                     alt="ic_arrow_right"/>
                                                5 <span>月</span> 6 <span>日</span> <span>(日)</span>

                                            </div>
                                            <div className="hours">9:00-18:30 <span className="date_state">に変更</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt="ic_follow"/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt="ic_like2"/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt="ic_share"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notice_items notice_items1">
                        <div className="container-fluid">
                            <div className="time">
                                4時間前
                            </div>
                            <div className="user">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt="icon"/>
                                </div>
                                <div className="user_content">
                                    <div className="user_name">Miyashima hanako <span>さんが時間を変更しました。</span></div>
                                    <div className="calander">
                                        <span><img src={require('../../../icons/ic_schedule_48px.png')}
                                                   alt="ic_schedule_48px"/></span>
                                        ピクサー・ザ・フレンドシップ <br/>～仲間といっしょに冒険の世界へ
                                    </div>
                                    <div className="date_houser">
                                        <div className="date">
                                            4 <span>月</span> 28 <span>日</span> <span>(土)</span>
                                            <img src={require('../../../icons/ic_arrow_right.png')}
                                                 alt="ic_arrow_right"/>
                                            5 <span>月</span> 6 <span>日</span> <span>(日)</span>

                                        </div>
                                        <div className="hours">9:00-18:30 <span className="date_state">に変更</span></div>
                                    </div>
                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt="ic_follow"/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt="ic_like2"/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt="ic share"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notice_items notice_items1">
                        <div className="container-fluid">
                            <div className="time">
                                4時間前
                            </div>
                            <div className="user">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt="icon"/>
                                </div>
                                <div className="user_content">
                                    <div className="user_name">Miyashima hanako <span>さんが時間を変更しました。</span></div>
                                    <div className="calander">
                                        <span><img src={require('../../../icons/ic_schedule_48px.png')}
                                                   alt="ic schedule"/></span>
                                        ピクサー・ザ・フレンドシップ <br/>～仲間といっしょに冒険の世界へ
                                    </div>

                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt="ic follow"/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt="ic like2"/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt="ic share"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notice_items">
                        <div className="container-fluid">
                            <div className="time">
                                たった今
                            </div>
                            <div className="user ">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt="icon"/>
                                </div>
                                <div className="user_content">
                                    <div className="user_name">宮島 太郎 <span>さんが日付を変更しました。</span></div>
                                    <div className="calander">
                                        <span><img src={require('../../../icons/ic_calender_blue.png')} alt=""/></span>
                                        プロ野球 横浜DeNAベイスターズ公式戦
                                    </div>
                                    <div className="date_houser">
                                        <div className="date">
                                            4 <span>月</span> 28 <span>日</span> <span className="date_from">(土)</span>
                                            <span className="date_state">に変更</span>
                                        </div>
                                        <div className="hours">9:00-18:30 <span className="date_state">に変更</span></div>
                                    </div>
                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt=""/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt=""/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="notice_items notice_items3">
                        <div className="container-fluid">
                            <div className="time">
                                たった今
                            </div>
                            <div className="user ">
                                <div className="user_icon"><img src={require('../../../icons/icon.png')} alt=""/></div>
                                <div className="user_content">
                                    <div className="user_name">宮島 太郎 <span>さんが日付を変更しました。</span></div>
                                    <div className="calander">
                                        <span><img src={require('../../../icons/ic_calender_blue.png')} alt=""/></span>
                                        プロ野球 横浜DeNAベイスターズ公式戦
                                    </div>
                                    <div className="date_houser">
                                        <div className="d_title">観劇フェスティバル Hibiya Festival</div>
                                        <div className="date">
                                            4 <span>月</span> 28 <span>日</span> <span className="date_from">(土)</span>
                                            <img src={require('../../../icons/arrown-right.png')} alt=""/>
                                            5 <span>月</span> 6 <span>日</span> <span className="date_to">(日)</span>
                                            <span className="date_state">に変更</span>
                                        </div>
                                        <div className="hours">9:00-18:30</div>
                                    </div>
                                    <div className="inner">
                                        <div className="follow"><img src={require('../../../icons/ic_follow.png')}
                                                                     alt=""/>
                                            989
                                        </div>
                                        <div className="like">
                                            <img src={require('../../../icons/ic_like2.png')} alt=""/>
                                            989
                                        </div>
                                        <div className="share">
                                            <img src={require('../../../icons/ic_share.png')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
