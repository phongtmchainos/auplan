import React from "react";
import "./CalendarDetail.css";
import Calendars from "../home/calendars/Calendars";
import Schedules from "../home/schedules/Schedules";
import Carousel from "nuka-carousel";
import bg1 from "../../../images/bg1.png";
import bg2 from "../../../images/bg2.png";

export default class CalendarDetail extends React.Component {
  render() {
    return (
      <div className="calendar-detail">
        <div className="card_schedule">
          <div className="main-slide">
            <Carousel
              renderCenterLeftControls={() => null}
              renderCenterRightControls={() => null}
              wrapAround={true}
            >
              <div className="slide">
                <img src={bg1} alt="bg1" />
              </div>
              <div className="slide">
                <img src={bg2} alt="bg2" />
              </div>
              <div className="slide">
                <img src={bg1} alt="bg1" />
              </div>
            </Carousel>
          </div>
          <div className="container-fluid">
            <div className="user">
              <div className="row">
                <div className="user_icon col-xs-2">
                  <img src={require('../../../icons/user_icon.png')} alt="" />
                </div>
                <div className="col-xs-7">
                  <div className="name">宮島 太郎</div>
                  <div className="nick">@auplan</div>
                </div>
                <div className="col-xs-3 private">
                  <img src={require('../../../icons/ic_pulic.png')} alt="" />
                  <span>公開</span>
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="row">
                <div className="col-xs-7 title">
                  予定されているスケジュール数
                </div>
                <div className="col-xs-5 private">
                  <img src={require('../../../icons/ic_pulic.png')} alt="" />
                  <span>公開</span>
                </div>
              </div>
            </div>
            <div className="prince_icon">
              <div className="row">
                <div className="col-xs-5 prince">￥150</div>
                <div className="col-xs-3"><img src={require('../../../icons/ic_follow.png')} alt="" /> 989</div>
                <div className="col-xs-3"><img src={require('../../../icons/ic_like2.png')} alt="" /> 346</div>
                <div className="col-xs-1"><img src={require('../../../icons/ic_share.png')} alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cv_bnt_l">
          <div className="container-fluid">
            <div className="cv_bnt">
              <div className="button"><span><img src={require('../../../icons/ic_follow2.png')} alt="" /></span>カレンダーをフォロー/購入</div>
            </div>
          </div>
        </div>
        <div className="more">
          <div className="container-fluid">
            カレンダーの詳細説明テキストが入ります。あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○。
            あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■
            <div className="more_1">
              <img src={require('../../../icons/more.png')} alt="" />
            </div>
            <div className="text">
              ＃ベイスターズ　＃DeNA　＃横浜スタジアム <br />
              ＃プロ野球　＃試合日程　＃タグテキスト
            </div>
          </div>
        </div>
        <div className="place">
          <img src={require('../../../icons/calander.png')} alt="" />
        </div>
        <div className="link">
          <div className="container-fluid">
            <div className="cap">関連リンク</div>
            <div className="text"><span><img src={require('../../../icons/ic_website.png')} alt="" /></span> 横浜DeNAベイスターズ 公式サイト</div>
            <div className="text"><span><img src={require('../../../icons/ic_fb.png')} alt="" /></span> 横浜DeNAベイスターズ 公式Facebook</div>
            <div className="text"><span><img src={require('../../../icons/ic_fixed.png')} alt="" /></span> 横浜DeNAベイスターズ 公式Twitter</div>
          </div>
        </div>
        <div id="user">
          <div className="container-fluid">
            <div className="cap">投稿したユーザー</div>
            <div className="card_user">
              <div className="row">
                <div className="col-xs-3 user_name"><img src={require('../../../icons/user_img.png')} alt="" /></div>
                <div className="col-xs-9">
                  <div className="name">
                    <div className="name1">宮島 太郎</div>
                    <div className="name2">@auplan</div>
                  </div>
                  <div className="inner">
                    <div><span className="fan"><img src={require('../../../icons/ic_fan.png')} alt="" /></span>84</div>
                    <div><span><img src={require('../../../icons/ic_calender.png')} alt="" /></span>451</div>
                    <div><span><img src={require('../../../icons/ic_Schedule.png')} alt="" /></span>660</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cv_bnt">
              <div className="button">ファンになる</div>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="container-fluid">
            <div className="cap">
              <div className="row">
                <div className="col-xs-6">コメント</div>
                <div className="col-xs-6 ic_comment"><img src={require('../../../icons/ic_comment.png')} alt="" /><span>10件</span></div>
              </div>
            </div>
            <div className="user">
              <div className="row">
                <div className="col-xs-2"><img src={require('../../../icons/user_img.png')} alt="" /></div>
                <div className="col-xs-10 ">
                  <div className=" comment_item">
                    <div className="row">
                      <div className="col-xs-6 name">宮島 太郎</div>
                      <div className="col-xs-6 date">たった今</div>
                    </div>
                    <div className="content">
                      コメントが入ります○あああああああああ■あああああああああ！
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user">
              <div className="row">
                <div className="col-xs-2"><img src={require('../../../icons/user_img.png')} alt="" /></div>
                <div className="col-xs-10 ">
                  <div className=" comment_item">
                    <div className="row">
                      <div className="col-xs-6 name">宮島 太郎</div>
                      <div className="col-xs-6 date">たった今</div>
                    </div>
                    <div className="content">
                      コメントが入ります○あああああああああ■あああああああああ！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more2"><img src={require('../../../icons/more.png')} alt="" /></div>
        </div>
        <div className="prince_icon">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-5 prince">￥150</div>
              <div className="col-xs-3"><img src={require('../../../icons/ic_follow.png')} alt="" /> 989</div>
              <div className="col-xs-3"><img src={require('../../../icons/ic_like2.png')} alt="" /> 346</div>
              <div className="col-xs-1"><img src={require('../../../icons/ic_share.png')} alt="" /> </div>
            </div>
          </div>
          <div className="cv_bnt_l">
            <div className="button"><span><img src={require('../../../icons/ic_follow2.png')} alt="" /></span>スケジュールをフォロー/購入</div>
          </div>
        </div>
        <div className="recommended">
          <div className="cap">
            <div className="container-fluid"> おすすめカレンダー</div>
          </div>
          <Calendars />
          <Schedules />
        </div>
      </div>

    )
  }
}
