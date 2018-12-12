import React from "react";
import { Link } from "react-router-dom";
import "./Schedule.css";

export default class SearchSchedule extends React.Component {
    render() {
        return (
            <div className="search_schedule">
                <Link to="/schedule-detail">
                    <div className="schedule_item">
                        <div className="left">27 <p className="gray">(金)</p>
                        </div>
                        <div className="right">
                            <div className="schedule_content">
                                <div className="schedule">
                                    <div className="content">DeNA vs ヤクルト
                                        <div className="date">
                                            <div className="from">4 <span>月</span> 28 <span>日</span> <span className="gray">(金)</span></div>
                                        </div>
                                        <div className="house">9:00 - 18:30<span>最終日は17:00まで</span></div>
                                    </div>
                                </div>
                                <div className="img"><img src={require('../../../../icons/img_1.png')} alt="" /></div>
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
                                <div className="prince_icon">
                                    <div className="row">
                                        <div className="col-xs-5 prince">￥150</div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="download-ic" src={require('../../../../icons/ic_download.png')} alt="" /> </div>
                                                <div className="col-xs-5">989</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="like-ic" src={require('../../../../icons/ic_like2.png')} alt="" /></div>
                                                <div className="col-xs-5">346</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-1"><img className="share-ic" src={require('../../../../icons/share.png')} alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/schedule-detail">
                    <div className="schedule_item">
                        <div className="left">
                            27 <p className="gray">(金)</p>
                            <div className="inSession">開催中</div>
                        </div>
                        <div className="right">
                            <div className="schedule_content">
                                <div className="schedule">
                                    <div className="content">DeNA vs ヤクルト
                                        <div className="date">
                                            <div className="from">4 <span>月</span> 28 <span>日</span> <span className="gray">(金)</span></div>
                                        </div>
                                        <div className="house">9:00 - 18:30<span>最終日は17:00まで</span></div>
                                    </div>
                                </div>
                                <div className="img"><img src={require('../../../../icons/img_1.png')} alt="" /></div>
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
                                <div className="prince_icon">
                                    <div className="row">
                                        <div className="col-xs-5 prince">￥150</div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="download-ic" src={require('../../../../icons/ic_download.png')} alt="" /> </div>
                                                <div className="col-xs-5">989</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="like-ic" src={require('../../../../icons/ic_like2.png')} alt="" /></div>
                                                <div className="col-xs-5">346</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-1"><img className="share-ic" src={require('../../../../icons/share.png')} alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/schedule-detail">
                    <div className="schedule_item">
                        <div className="left">
                            27 <p className="gray">(金)</p>
                            <div className="inSession">開催中</div>
                        </div>
                        <div className="right">
                            <div className="schedule_content">
                                <div className="schedule">
                                    <div className="content">DeNA vs ヤクルト
                                        <div className="date">
                                            <div className="from">4 <span>月</span> 28 <span>日</span> <span className="gray">(金)</span></div>
                                        </div>
                                        <div className="house">9:00 - 18:30<span>最終日は17:00まで</span></div>
                                    </div>
                                </div>
                                <div className="img"><img src={require('../../../../icons/img_1.png')} alt="" /></div>
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
                                <div className="prince_icon">
                                    <div className="row">
                                        <div className="col-xs-5 prince">￥150</div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="download-ic" src={require('../../../../icons/ic_download.png')} alt="" /> </div>
                                                <div className="col-xs-5">989</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-3">
                                            <div className="row d_flex_center">
                                                <div className="col-xs-5"><img className="like-ic" src={require('../../../../icons/ic_like2.png')} alt="" /></div>
                                                <div className="col-xs-5">346</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-1"><img className="share-ic" src={require('../../../../icons/share.png')} alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                
            </div>
        )
    }
}
