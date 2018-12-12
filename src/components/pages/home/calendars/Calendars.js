import Carousel from "nuka-carousel";
import React from "react";
import {Link} from 'react-router-dom';
import RecCalendarList from "../../recommended/recCalendarlist/RecCalendarList";
import BasePageComponent from "../../../commons/BasePageComponent";
import "./Calendars.css";

export default class Calendars extends BasePageComponent {
    render() {
        return (
            <div className="calendars-container rec-calendar">
                <div className={"cap-rec-calendar " + (this.props.showHeade ? 'hidden' : '')}>
                    <div className={(this.props.tagPage ? 'hidden' : 'show')}>カレンダー</div>
                    <div className={(this.props.tagPage === 'scheduleDetail' ? 'show' : 'hidden')}>このスケジュールを含むカレンダー
                    </div>
                    <div className="loadMore" onClick={() => this.refs.RecCalendarList.toggleModal()}>
                        <span>もっと見る</span>
                        <img className="arrow-right-ic" src={require('../../../../icons/more-のコピー.png')}
                             alt="more icon"/>
                    </div>
                </div>
                <Carousel
                    renderCenterLeftControls={() => null}
                    renderCenterRightControls={() => null}
                    renderBottomCenterControls={() => null}
                    wrapAround={false}
                    slideWidth={0.80}
                    speed={500}
                >
                    {this.props.calendars && this.props.calendars.map(calendar => (
                        <Link key={calendar.id} to={`/calendar-detail?id=${calendar.id}`}>
                            <div className="card-calendar">
                                <div className="title">
                                    {calendar.title}
                                </div>
                                <div className="info-area">
                                    <img className="user-info-ic" src={calendar.profile_image} alt="user icon"/>
                                    <div className="info">
                                        <div>{calendar.first_name + calendar.last_name}</div>
                                        <div>{calendar.account_id}</div>
                                    </div>
                                </div>
                                <div className="info-img-area">
                                    <img src={calendar.image1} alt="info img"/>
                                </div>
                                <div className="price-icon">
                                    <div className="price">{this.checkShowPriceInCalendarSchedule(calendar.price, calendar.is_today)}</div>
                                    <div className="icon">
                                        <div className="icon-item">
                                            <img className="follow-ic"
                                                 src={require('../../../../icons/ic_follow_36.png')} alt="Follow icon"/>
                                            <span>{calendar.follow_count}</span>
                                        </div>
                                        <div className="icon-item">
                                            <img className="like-ic" src={require('../../../../icons/ic_like_36.png')}
                                                 alt="Like icon"/>
                                            <span>{calendar.like_count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </Carousel>
                <RecCalendarList ref={'RecCalendarList'}/>
            </div>
        )
    }
}
