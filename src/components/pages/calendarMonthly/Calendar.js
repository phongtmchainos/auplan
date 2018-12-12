import React from 'react';
import moment from "moment";
import BigCalendar from 'react-big-calendar';
import EitMyCalendar from "../editMyCalendar/EditMyCalendar";
import BasePageComponent from "../../commons/BasePageComponent";
import './Calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import ScheduleList from "./ScheduleList";

const CustomToolbar = (props) => {
    return (
        <div className="custom-toolbar">
            <div className="left-toolbar">
                <div className="date">{moment(props.date).format('DD')}</div>
            </div>
            <div className="center-toolbar">
                <span className="year">{moment(props.date).year()}年</span>
                <span className="month">{moment(props.date).format('MM')}月</span>
            </div>
            <div className="right-toolbar">
                <div onClick={() => props.editMyCalendar.toggleModal()}>...</div>
            </div>
        </div>
    )
};

const WeekDay = (props) => {
    return (
        <div className={`week-day ${moment(props.date).format('dd')}`}>
            {moment(props.date).format('dddd')}
        </div>
    )
};

const DateHeader = (props) => {
    return (
        <div className={`date ${moment(props.date).format('dd')}`}
             onClick={(e) => props.handleClickDate(props.date, e)}>
            {moment(props.date).format('DD')}
        </div>
    )
};

export default class Calendar extends BasePageComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowModalAddSchedule: false,
            activeDate: new Date(),
            editMyCalendar: false,
        };
        this.handleClickDate = this.handleClickDate.bind(this);
    }

    handleClickDate(date) {
        this.setState({
            activeDate: new Date(date),
        });
    };

    componentDidMount() {
        this.fetchData();

        this.setState({
            editMyCalendar: this.refs.editMyCalendar,
        });
    }

    fetchData() {
        this.props.fetchCalendarMonthly();
    }

    render() {
        let localizer = BigCalendar.momentLocalizer(moment);

        return (
            <div className="calendar-monthly">
                <BigCalendar
                    localizer={localizer}
                    events={this.props.calendarMonthlyData}
                    startAccessor={(event) => new Date(event.start_period)}
                    endAccessor={(event) => new Date(event.end_period)}
                    defaultDate={new Date()}
                    date={this.state.activeDate}
                    onNavigate={this.handleClickDate}
                    components={{
                        toolbar: (props) => <CustomToolbar {...props} date={this.state.activeDate}
                                                           editMyCalendar={this.state.editMyCalendar}/>,
                        month: {
                            header: WeekDay,
                            dateHeader: (props) => <DateHeader {...props} handleClickDate={this.handleClickDate}/>,
                        },
                    }}
                    onSelectDate={(e) => console.log(e)}
                />
                <ScheduleList {...this.props} />
                <EitMyCalendar ref={'editMyCalendar'} {...this.props} />
            </div>
        );
    }
}
