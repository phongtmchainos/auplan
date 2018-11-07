import Carousel from "nuka-carousel";
import React from "react";
import "./User.css";

export default class User extends React.Component {
  render() {
    return (
      <div className="rec-user">
        <div className="cap-rec-user">
          <div>ユーザー</div>
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
          slideWidth={0.35}
          speed={500}
        >
          <div className="card-user">
            <div>
              <img className="user-avatar" src={require('../../../../images/user_icon3.png')} alt=""/>
            </div>
            <div className="name">
              但野 茂出留
            </div>
            <div className="nick-name">
              @pixta_model
            </div>
          </div>
          <div className="card-user">
            <div>
              <img className="user-avatar" src={require('../../../../images/user_icon2.png')} alt=""/>
            </div>
            <div className="name">
              但野 茂出留
            </div>
            <div className="nick-name">
              @nakajo_...
            </div>
          </div>
          <div className="card-user">
            <div>
              <img className="user-avatar" src={require('../../../../images/user_icon4.png')} alt=""/>
            </div>
            <div className="name">
              小田急百貨店...
            </div>
            <div className="nick-name">
              @odakyu-...
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}
