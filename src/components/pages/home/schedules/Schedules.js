import Carousel from "nuka-carousel";
import React from "react";
import {Link} from 'react-router-dom';
import RecSchedulesList from '../../recommended/recScheduleList/RecScheduleList';
import BasePageComponent from "../../../commons/BasePageComponent";
import "./Schedules.css";

export default class Schedules extends BasePageComponent {
    render() {
        return (
            <div className="rec-schedule">
                <div className="cap-rec-schedule">
                    <div className={(this.props.tagPage ? 'hidden' : 'show')}>スケジュール</div>
                    <div className={(this.props.tagPage === 'scheduleDetail' ? 'show' : 'hidden')}>似ているスケジュール</div>
                    <div className="loadMore" onClick={() => this.refs.recSchedulesList.toggleModal()}>
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

                    {
                        this.props.schedules && this.props.schedules.map(schedule => (
                        <Link key={schedule.id} to={`/schedule-detail?id=${schedule.id}`}>
                            <div className="card-schedule">
                                <div className="title">
                                    <div className="date">{this.getInfoOfDatetime(schedule.start_date).month}<span>月</span>{this.getInfoOfDatetime(schedule.start_date).day}<span>日</span>
                                        <span className="day">({this.getInfoOfDatetime(schedule.start_date).weekdays})</span>
                                    </div>
                                    <div>
                                        <span className="time">{this.getInfoOfDatetime(schedule.start_time).hour}-{this.getInfoOfDatetime(schedule.end_time).hour}</span>
                                        <span className="status">{this.checkShowPriceInCalendarSchedule(schedule.price, schedule.is_today)}</span>
                                    </div>
                                    <div className="teams">{schedule.title} </div>
                                </div>
                                <div className="info-area">
                                    <img className="user-info-ic" src={schedule.post_user.profile_image} alt="user icon"/>
                                    <div className="info">
                                        <div>{schedule.post_user.display_name}</div>
                                        <div>{schedule.post_user.account_id}</div>
                                    </div>
                                </div>
                                <div className="info-img-area">
                                    <img src={schedule.image1} alt="info img"/>
                                </div>
                                <div className="price-icon">
                                    <div className="icon">
                                        <div className="icon-item">
                                            <img className="follow-ic"
                                                 src={require('../../../../icons/ic_follow_36.png')} alt="Follow icon"/>
                                            <span>{schedule.follow_count}</span>
                                        </div>
                                        <div className="icon-item">
                                            <img className="like-ic" src={require('../../../../icons/ic_like_36.png')}
                                                 alt="Like icon"/>
                                            <span>{schedule.like_count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </Carousel>
                <RecSchedulesList ref={'recSchedulesList'}/>
            </div>
        )
    }
}
