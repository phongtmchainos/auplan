import React from 'react';
import "./Home.css";
import Carousel from 'nuka-carousel';
import bg1 from "../../../images/bg1.png";
import bg2 from "../../../images/bg2.png";
import Calendars from "./calendars/Calendars";
import Schedules from "./schedules/Schedules";
import User from "./users/User";
import WeekCalendar from "./weekCalendar/WeekCalendar";

export default class Home extends React.Component {
  componentDidMount() {
    this.fetchTopImages();
  }

  fetchTopImages() {
    this.props.fetchTopImages();
  }

  render() {
    return (
      <div className="home">
        <div className="main-slide">
          <Carousel
            renderCenterLeftControls={() => null}
            renderCenterRightControls={() => null}
            wrapAround = {true}
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
        <div className="calendarArea">
          <div className="cap">
            <img className="search-ic" src={require('../../../icons/ic_search_48px.png')} alt="search icon"/>
            <span>カレンダー・スケジュールを探す</span>
          </div>
          <div className="calendar">
            <WeekCalendar numberWeek={4}/>
          </div>
          <div className="search-input">
            <img className="search-ic" src={require('../../../icons/ic_search_32-のコピー.png')} alt="cancel button"/>
            <input type="text" placeholder="キーワード検索"/>
            <img className="delete-ic" src={require('../../../icons/ic_delete.png')} alt="cancel button"/>
          </div>
          <div className="location">
            <img className="location-ic" src={require('../../../icons/ic_location_48px.png')} alt="location icon"/>
            <span>近くのプランを探す</span>
          </div>
        </div>
        <div className="recommended">
          <div className="cap">
            <img className="recommended-ic" src={require('../../../icons/ic_recommended_48px.png')} alt="recommended icon"/>
            <div>あなたへのおすすめ</div>
            <img className="close-ic" src={require('../../../icons/ic_close_32-のコピー.png')} alt="closes icon"/>
          </div>
          <Calendars />
          <Schedules />
          <User />
        </div>
        <div className="recommended recommended-close">
          <div className="cap">
            <img className="fan-ic" src={require('../../../icons/ic_fan_48.png')} alt="recommended icon"/>
            <div>ファンユーザーのおすすめ</div>
            <img className="open-ic" src={require('../../../icons/ic_open_32-のコピー.png')} alt="closes icon"/>
          </div>
        </div>
        <div className="recommended">
          <div className="cap">
            <img className="alert-ic" src={require('../../../icons/ic_alart_48.png')} alt="recommended icon"/>
            <div>新着プラン</div>
            <img  className="close-ic" src={require('../../../icons/ic_close_32-のコピー.png')} alt="closes icon"/>
          </div>
          <Calendars />
          <Schedules />
        </div>
      </div>
    );
  }
}
