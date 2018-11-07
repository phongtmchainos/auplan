import Carousel from "nuka-carousel";
import React from "react";
import "./Calendars.css";

export default class Calendars extends React.Component {
  render() {
    return (
      <div className="rec-calendar">
        <div className="cap-rec-calendar">
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
          <div className="card-calendar">
            <div className="title">
              プロ野球　ヤクルトスワローズ公式戦
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/calendar-example1.png')} alt="info img"/>
            </div>
            <div className="price-icon">
              <div className="price">無料</div>
              <div className="icon">
                <div className="icon-item">
                  <img className="follow-ic" src={require('../../../../icons/ic_follow_36.png')} alt="Follow icon"/>
                  <span>989</span>
                </div>
                <div  className="icon-item">
                  <img className="like-ic" src={require('../../../../icons/ic_like_36.png')} alt="Like icon"/>
                  <span>3346</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-calendar">
            <div className="title">
              プロ野球　ヤクルトスワローズ公式戦
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/calendar-example1.png')} alt="info img"/>
            </div>
            <div className="price-icon">
              <div className="price">無料</div>
              <div className="icon">
                <div className="icon-item">
                  <img className="follow-ic" src={require('../../../../icons/ic_follow_36.png')} alt="Follow icon"/>
                  <span>989</span>
                </div>
                <div  className="icon-item">
                  <img className="like-ic" src={require('../../../../icons/ic_like_36.png')} alt="Like icon"/>
                  <span>3346</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-calendar">
            <div className="title">
              プロ野球　ヤクルトスワローズ公式戦
            </div>
            <div className="info-area">
              <img className="user-info-ic" src={require('../../../../icons/user_icon_s.png')} alt="user icon"/>
              <div className="info">
                <div>宮島 太郎</div>
                <div>@auplan</div>
              </div>
            </div>
            <div className="info-img-area">
              <img src={require('../../../../images/calendar-example1.png')} alt="info img"/>
            </div>
            <div className="price-icon">
              <div className="price">無料</div>
              <div className="icon">
                <div className="icon-item">
                  <img className="follow-ic" src={require('../../../../icons/ic_follow_36.png')} alt="Follow icon"/>
                  <span>989</span>
                </div>
                <div  className="icon-item">
                  <img className="like-ic" src={require('../../../../icons/ic_like_36.png')} alt="Like icon"/>
                  <span>3346</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}
