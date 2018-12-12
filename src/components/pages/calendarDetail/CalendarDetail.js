import React from "react";
import {Link} from 'react-router-dom';
import "./CalendarDetail.css";
import Calendars from "../home/calendars/Calendars";
import Carousel from "nuka-carousel";
import bg1 from "../../../images/bg1.png";
import bg2 from "../../../images/bg2.png";
import RecCalendar from "../../pages/recommended/recCalendarlist/RecCalendarList";
import Calendar from './calendar/Calendar'
import TopScreen from "../../layouts/baseScreen/TopScreen";

export default class CalendarDetail extends React.Component {
    render() {
        return (
            <div className="main-component">
                <TopScreen/>
                <div className="calendar-detail">
                    <div className="card_schedule">
                        <div className="main-slide">
                            <Carousel
                                renderCenterLeftControls={() => null}
                                renderCenterRightControls={() => null}
                                wrapAround={true}
                            >
                                <div className="slide">
                                    <img src={bg1} alt="bg1"/>
                                </div>
                                <div className="slide">
                                    <img src={bg2} alt="bg2"/>
                                </div>
                                <div className="slide">
                                    <img src={bg1} alt="bg1"/>
                                </div>
                            </Carousel>
                        </div>
                        <div className="container-fluid">
                            <div className="user">
                                <div className="row">
                                    <div className="user_icon col-xs-2">
                                        <Link to="/my-user">
                                            <img src={require('../../../icons/user_icon.png')} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="col-xs-7">
                                        <Link to="/my-user">
                                            <div className="name">宮島 太郎</div>
                                            <div className="nick">@auplan</div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-3 private">
                                        <img src={require('../../../icons/ic_pulic.png')} alt=""/>
                                        <span>公開</span>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule">
                                <div className="row">
                                    <div className="col-xs-7 title">
                                        予定されているスケジュール数
                                    </div>
                                    <div className="col-xs-5 private">
                                        <img src={require('../../../icons/ic_schedule_48.png')} alt=""/>
                                        <span>115</span>
                                    </div>
                                </div>
                            </div>
                            <div className="prince_icon">
                                <div className="row">
                                    <div className="col-xs-5 prince">￥150</div>
                                    <div className="col-xs-3 "><img className="ic_follow"
                                                                    src={require('../../../icons/ic_follow.png')}
                                                                    alt=""/> 989
                                    </div>
                                    <div className="col-xs-3 "><img className="ic_like"
                                                                    src={require('../../../icons/ic_like2.png')}
                                                                    alt=""/> 346
                                    </div>
                                    <div className="col-xs-1 "><img className="ic_share"
                                                                    src={require('../../../icons/ic_share.png')}
                                                                    alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cv_bnt_l">
                        <div className="container-fluid">
                            <div className="cv_bnt">
                                <Link to="/calendar-new-entry">
                                    <div className="button">
                                        <img src={require('../../../icons/ic_follow2.png')} alt=""/>
                                        <span>カレンダーをフォロー/購入</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <div className="container-fluid">
                            カレンダーの詳細説明テキストが入ります。あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○。
                            あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■
                            <div className="more_1">
                                <img src={require('../../../icons/more.png')} alt=""/>
                            </div>
                            <div className="text" onClick={() => this.refs.recCalendar.toggleModal()}>
                                ＃ベイスターズ ＃DeNA ＃横浜スタジアム <br/>
                                ＃プロ野球 ＃試合日程 ＃タグテキスト
                            </div>
                        </div>
                    </div>
                    <div className="place">
                        <div className="place-cap">予定されているスケジュール</div>
                        <Calendar/>
                    </div>
                    <div className="link">
                        <div className="cap">関連リンク</div>
                        <div className="container-fluid">
                            <div className="text"><span><img src={require('../../../icons/ic_website.png')}
                                                             alt=""/></span> 横浜DeNAベイスターズ 公式サイト
                            </div>
                            <div className="text"><span><img src={require('../../../icons/ic_fb.png')}
                                                             alt=""/></span> 横浜DeNAベイスターズ 公式Facebook
                            </div>
                            <div className="text"><span><img src={require('../../../icons/ic_fixed.png')}
                                                             alt=""/></span> 横浜DeNAベイスターズ 公式Twitter
                            </div>
                        </div>
                    </div>
                    <div id="user">
                        <div className="cap">投稿したユーザー</div>
                        <div className="container-fluid">
                            <div className="card_user">
                                <div className="row">
                                    <div className="col-xs-3 user_name"><Link to="/my-user"><img
                                        src={require('../../../icons/user_img.png')} alt=""/></Link></div>
                                    <div className="col-xs-9">
                                        <div className="name">
                                            <Link to="/my-user">
                                                <div className="name1">宮島 太郎</div>
                                                <div className="name2">@auplan</div>
                                            </Link>
                                        </div>
                                        <div className="inner">
                                            <div><span className="fan"><img src={require('../../../icons/ic_fan.png')}
                                                                            alt=""/></span>84
                                            </div>
                                            <div><span><img src={require('../../../icons/ic_calender.png')}
                                                            alt=""/></span>451
                                            </div>
                                            <div><span><img src={require('../../../icons/ic_Schedule.png')}
                                                            alt=""/></span>660
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cv_bnt">
                                <div className="button">ファンになる</div>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="cap">
                            <div className="row">
                                <div className="col-xs-6">コメント</div>
                                <div className="col-xs-6 ic_comment"><img src={require('../../../icons/ic_comment.png')}
                                                                          alt=""/><span>10件</span></div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="user">
                                <div className="row">
                                    <div className="col-xs-2"><img src={require('../../../icons/user_img.png')} alt=""/>
                                    </div>
                                    <div className="col-xs-10 ">
                                        <div className=" comment_item">
                                            <div className="name">宮島 太郎 <span>@auplan</span></div>
                                            <div className="content">
                                                コメントが入ります○あああああああああ■あああああああああ！
                                            </div>
                                            <div className="ic_reply">
                                                <img src={require('../../../icons/ic_reply.png')} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user">
                                <div className="row">
                                    <div className="col-xs-2"><img src={require('../../../icons/user_img.png')} alt=""/>
                                    </div>
                                    <div className="col-xs-10 ">
                                        <div className=" comment_item">
                                            <div className="name">宮島 太郎 <span>@pixta_catmodel</span></div>
                                            <div className="content">
                                                コメントが入ります○あああああああああ■あああああああああ！
                                            </div>
                                            <div className="ic_reply">
                                                <img src={require('../../../icons/ic_reply.png')} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="more2"><img src={require('../../../icons/more.png')} alt=""/></div>
                            <div className="search">
                                {/* --------------------------------- */}
                                <img className="ic_comment" src={require('../../../icons/ic_comment.png')} alt=""/>
                                <input className="form-control" type="text" alt="" placeholder="コメントする"/>
                                <img className="ic_delete" src={require('../../../icons/ic_delete.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="prince_icon">
                        <div className="capTitle">
                            <div className="row">
                                <div className="col-xs-5 prince">￥150</div>
                                <div className="col-xs-3"><img src={require('../../../icons/ic_follow.png')}
                                                               alt=""/> 989
                                </div>
                                <div className="col-xs-3"><img src={require('../../../icons/ic_like2.png')} alt=""/> 346
                                </div>
                                <div className="col-xs-1"><img src={require('../../../icons/ic_share.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="cv_bnt_l">
                            <div className="button">
                                <img src={require('../../../icons/ic_follow2.png')} alt=""/>
                                <span>スケジュールをフォロー/購入</span>
                            </div>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="cap">
                            <div className="container-fluid"> おすすめカレンダー</div>
                        </div>
                        <Calendars showHeade='false'/>
                    </div>
                    <RecCalendar ref={'recCalendar'}/>
                </div>
            </div>
        )
    }
}
