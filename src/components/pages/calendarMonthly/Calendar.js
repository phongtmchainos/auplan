import React from 'react';
import './Calendar.css';
import moment from "moment";
import BigCalendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

const events = [
  {
    'title': 'Auplan ページデザイン作業',
    'allDay': false,
    'start': new Date(2018, 10, 13, 9, 0, 0),
    'end': new Date(2018, 10, 15, 10, 0, 0)
  },
  {
    'title': 'DeNA vs ヤ',
    'start': new Date(2018, 10, 15, 11, 0, 0),
    'end': new Date(2018, 10, 15, 12, 0, 0)
  },
  {
    'title': '春分の日',
    'start': new Date(2018, 10, 21, 11, 0, 0),
    'end': new Date(2018, 10, 21, 12, 0, 0)
  },
  {
    'title': '見積書作成',
    'start': new Date(2018, 10, 23, 9, 0, 0),
    'end': new Date(2018, 10, 21, 10, 0, 0)
  },
  {
    'title': '2018年度社',
    'start': new Date(2018, 10, 23, 13, 0, 0),
    'end': new Date(2018, 10, 21, 14, 0, 0)
  },
  {
    'title': 'DeNA vs ヤ',
    'start': new Date(2018, 10, 23, 14, 0, 0),
    'end': new Date(2018, 10, 21, 15, 0, 0)
  },
  {
    'title': 'XYZ vs ABC',
    'start': new Date(2018, 10, 23, 15, 0, 0),
    'end': new Date(2018, 10, 21, 16, 0, 0)
  },
];

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
        <div>...</div>
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

const dateHeader = (props) => {
  return (
    <span className={`date ${moment(props.date).format('dd')}`}>
      {moment(props.date).format('DD')}
    </span>
  )
};

export default class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      isShowModalAddSchedule: false
    }
  }

  render(){
    moment.updateLocale('jp', {
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    });
    moment.locale("jp", {
      week: {
        dow: 1 //Monday is the first day of the week.
      }
    });
    let localizer = BigCalendar.momentLocalizer(moment);
    return (
      <div className="calendar-monthly">
        <BigCalendar
          localizer={localizer}
          events={events}
          defaultDate={new Date() }
          startAccessor="start"
          endAccessor="end"
          style={{ height: "860rem" }}
          components={{
            toolbar: CustomToolbar,
            month: {
              header: WeekDay,
              dateHeader: dateHeader,
            }
          }}
        />
        <div className="event-table">
          <div className="left-content">
            <div className="event-date">23</div>
            <div className="event-day">(金)</div>
          </div>
          <div className="right-content">
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
          </div>
          <div className="add-schedule" onClick={() => this.setState({isShowModalAddSchedule: !this.state.isShowModalAddSchedule})}>
            <span className={`${this.state.isShowModalAddSchedule ? 'close-ic' : 'open-ic'}`}>+</span>
          </div>
        </div>
        <div className={`add-schedule-modal ${this.state.isShowModalAddSchedule ? 'add-schedule-modal-show' : 'add-schedule-modal-hide'}`}>
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
