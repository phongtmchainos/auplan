import React from 'react';
import './MyCalendarList.css';
import moment from "moment";
// import BigCalendar from 'react-big-calendar';
import {Link} from 'react-router-dom';
import "react-big-calendar/lib/css/react-big-calendar.css";


export default class myCalendarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isShowModalAddSchedule: false
        }
    }

    render() {
        moment.updateLocale('jp', {
            weekdays: ['日', '月', '火', '水', '木', '金', '土'],
        });
        moment.locale("jp", {
            week: {
                dow: 1 //Monday is the first day of the week.
            }
        });
        return (
            <div className="my-calendar-list">
                <div className="event-table">
                    <div className="left-content">
                        <div className="event-date">23</div>
                        <div className="event-day">(金)</div>
                    </div>
                    <div className="right-content">
                        <Link to="/schedule-detail">
                            <div className="step-item" style={{background: '#ee8a3a'}}>
                                <span className="step-circle" style={{background: '#ee8a3a'}}>
                                </span>
                                <div className="event-info">
                                    <div className="time">
                                        <div>8:00</div>
                                        <div>8:45</div>
                                    </div>
                                    <div className="event-content">
                                        <div>Auplan ページデザイン作業</div>
                                        <div>
                                            <img className="pin-ic" src={require('../../../icons/pin.png')} alt=""/>
                                            Auplan ページデザイン作業
                                        </div>
                                    </div>
                                </div>
                                <div className="step-line"></div>
                            </div>
                        </Link>
                        <Link to="/schedule-detail">
                            <div className="step-item" style={{background: '#6981d1'}}>
                                <span className="step-circle" style={{background: '#6981d1'}}>
                                </span>
                                <div className="event-info">
                                    <div className="time">
                                        <div>8:00</div>
                                        <div>8:45</div>
                                    </div>
                                    <div className="event-content">
                                        <div>2018年度社</div>
                                        <div>
                                            <img className="pin-ic" src={require('../../../icons/pin.png')} alt=""/>
                                            Auplan ページデザイン作業
                                        </div>
                                    </div>
                                </div>
                                <div className="step-line"></div>
                            </div>
                        </Link>

                        <Link to="/schedule-detail">
                            <div className="step-item" style={{background: '#48acf2'}}>
                                <span className="step-circle" style={{background: '#48acf2'}}>
                                </span>
                                <div className="event-info">
                                    <div className="time">
                                        <div>8:00</div>
                                        <div>8:45</div>
                                    </div>
                                    <div className="event-content">
                                        <div>DeNA vs ヤ</div>
                                        <div>
                                            <img className="pin-ic" src={require('../../../icons/pin.png')} alt=""/>
                                            Auplan ページデザイン作業
                                        </div>
                                    </div>
                                </div>
                                <div className="step-line"></div>
                            </div>
                        </Link>

                        <Link to="/schedule-detail">
                            <div className="step-item" style={{background: '#48acf2'}}>
                                <span className="step-circle" style={{background: '#48acf2'}}>
                                </span>
                                <div className="event-info">
                                    <div className="time">
                                        <div>8:00</div>
                                        <div>8:45</div>
                                    </div>
                                    <div className="event-content">
                                        <div>DeNA vs ヤ</div>
                                        <div>
                                            <img className="pin-ic" src={require('../../../icons/pin.png')} alt=""/>
                                            Auplan ページデザイン作業
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="add-schedule"
                         onClick={() => this.setState({isShowModalAddSchedule: !this.state.isShowModalAddSchedule})}>
                        <span className={`${this.state.isShowModalAddSchedule ? 'close-ic' : 'open-ic'}`}>+</span>
                    </div>
                </div>
                <div
                    className={`add-schedule-modal ${this.state.isShowModalAddSchedule ? 'add-schedule-modal-show' : 'add-schedule-modal-hide'}`}>
                    <div className="dark-area">
                    </div>
                    <div className="main-modal">
                        <div className="add-schedule-button">
                            <img src={require('../../../icons/ic_calender_blue.png')} alt=""/>
                            カレンダー登録
                        </div>
                        <div className="add-schedule-button">
                            <img src={require('../../../icons/ic_Schedule2.png')} alt=""/>
                            スケジュール登録
                        </div>
                        <div className="help">
                            <img src={require('../../../icons/help.png')} alt=""/>
                            登録についてお困りですか
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
