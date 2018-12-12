import React from 'react';
import BasePageComponent from "../../commons/BasePageComponent";
import {Link} from "react-router-dom";

export default class ScheduleList extends BasePageComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let dataList = this.getSchedulesOfCalendar('2018-11-22T00:00:00.000Z');
        return (
            <div className="event-table">
                <div className="left-content">
                    <div className="event-date">{dataList.outContent.day}</div>
                    <div className="event-day">({dataList.outContent.weekdays})</div>
                </div>
                <div className="right-content">
                    {
                        dataList.schedules.map((schedule, keyIndex) => {
                            return (
                                <Link to="/schedule-detail" key={keyIndex}>
                                    <div className="step-item" style={{background: '#ee8a3a'}}>
                                        <span className="step-circle" style={{background: '#ee8a3a'}}>
                                        </span>
                                        <div className="event-info">
                                            <div className="time">
                                                <div>8:00</div>
                                                <div>8:45</div>
                                            </div>
                                            <div className="event-content">
                                                <div>{schedule.title}</div>
                                                <div>
                                                    <img className="pin-ic" src={require('../../../icons/pin.png')}
                                                         alt=""/>
                                                    Auplan ページデザイン作業
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-line"/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
