import Carousel from "nuka-carousel";
import React from "react";
import "./Schedules.css";

export default class Schedules extends React.Component {
  render() {
    return (
      <div className="rec-schedule">
        <div className="cap-rec-schedule">
          <div>カレンダー</div>
          <div className="loadMore">
            <span>もっと見る</span>
            <img className="arrow-right-ic" src={require('../../../../icons/more-のコピー.png')} alt="more icon"/>
          </div>
        </div>
        <Carousel
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          wrapAround = {false}
          slideWidth={0.80}
          speed={500}
        >
          <div className="card-schedule">
            <div className="title">
              <div className="date">4月27日
                <span className="day">(金)</span>
              </div>
              <div>
                <span className="time">18:00-22:00</span>
                <span className="status">本日開催です</span>
              </div>
              <div className="teams">DeNA vs ヤクルト</div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/schedule-example-1.png')} alt="info img"/>
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
          </div>
          <div className="card-schedule">
            <div className="title">
              <div className="date">4月27日
                <span className="day">(金)</span>
              </div>
              <div>
                <span className="time">18:00-22:00</span>
                <span className="status">本日開催です</span>
              </div>
              <div className="teams">DeNA vs ヤクルト</div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/schedule-example-1.png')} alt="info img"/>
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
          </div>
          <div className="card-schedule">
            <div className="title">
              <div className="date">4月27日
                <span className="day">(金)</span>
              </div>
              <div>
                <span className="time">18:00-22:00</span>
                <span className="status">本日開催です</span>
              </div>
              <div className="teams">DeNA vs ヤクルト</div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/schedule-example-1.png')} alt="info img"/>
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}
