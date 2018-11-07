import React from "react";
import "./ScheduleDetail.css";
import Calendars from "../home/calendars/Calendars";
import Schedules from "../home/schedules/Schedules";

export default class ScheduleDetail extends React.Component {
  render () {
    return (
      <div className="schedule-detail">
        <div className="card_schedule">
          <div className="container-fluid">
            <div className="schedule">
              <div className="content">
                ピクサー・ザ・フレンドシップ <br />
                ～仲間といっしょに冒険の世界へ
                <div className="date">
                  <div className="from">4 <span>月</span> 28 <span>日</span> <span className="blue">(土)</span></div>
                  <img src={require('../../../icons/arrown-right.png')}  alt="" />
                  <div className="to">5 <span>月</span> 6 <span>日</span> <span className="red">(日)</span></div>
                </div>
                <div className="house">
                  9:00-18:30
                  <span>最終日は17:00まで</span>
                </div>
              </div>
            </div>
            <div className="slider">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="item active">
                    <img src={require('../../../icons/img.png')} alt="" />
                  </div>
                  <div className="item">
                    <img src={require('../../../icons/img.png')} alt="" />
                  </div>
                  <div className="item">
                    <img src={require('../../../icons/img.png')} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="user">
              <div className="row">
                <div className="user_icon col-xs-2">
                  <img src={require('../../../icons/user_icon.png')}  alt="" />
                </div>
                <div className="col-xs-7">
                  <div className="name">宮島 太郎</div>
                  <div className="nick">@auplan</div>
                </div>
                <div className="col-xs-3 private">
                  <img src={require('../../../icons/ic_pulic.png')}  alt="" />
                  <span>公開</span>
                </div>
              </div>
            </div>
            <div className="prince_icon">
              <div className="row">
                <div className="col-xs-5 prince">￥150</div>
                <div className="col-xs-3"><img src={require('../../../icons/ic_follow.png')}  alt="" /> 989</div>
                <div className="col-xs-3"><img src={require('../../../icons/ic_like.png')}  alt="" /> 3496</div>
                <div className="col-xs-1"><img src={require('../../../icons/ic_share.png')}  alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cv">
          <div className="container-fluid">
            <div className="cv_bnt">
              <button><span><img src={require('../../../icons/ic_follow2.png')}  alt="" /></span>スケジュールをフォロー</button>
            </div>
            <div className="cv_bnt">
              <button><span><img src={require('../../../icons/ic_follow2.png')}  alt="" /></span>スケジュールを追加</button>
            </div>
            <div className="cv_bnt cv_bnt2">
              <button><span><img src={require('../../../icons/ic_Schedule2.png')}  alt="" /></span>スケジュールを編集</button>
            </div>
          </div>
        </div>
        <div className="entry">
          <div className="container-fluid">
            <div className="title">別のカレンダーに登録</div>
          </div>
          <div className="list">
            <div className="row">
              <div className="col-xs-3 ">
                <img className="ic_list_item" src={require('../../../icons/google.png')}  alt="" />
                <div className="list_item">Google <br /> カレンダー</div>
              </div>
              <div className="col-xs-3 ">
                <img className="ic_list_item" src={require('../../../icons/yahoo.png')}  alt="" />
                <div className="list_item">Yahoo! <br /> カレンダー</div>
              </div>
              <div className="col-xs-3 ">
                <img className="ic_list_item" src={require('../../../icons/MacOs.png')}  alt="" />
                <div className="list_item">カレンダー <br />（MacOS）</div>
              </div>
            </div>
          </div>
        </div>
        <div className="more">
          <div className="container-fluid">
            カレンダーの詳細説明テキストが入ります。あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○。
            あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■あああああああああ○あああああああああ■
            <div className="more_1">
              <img src={require('../../../icons/more.png')}  alt="" />
            </div>
            <div className="text">
              ＃ベイスターズ　＃DeNA　＃横浜スタジアム <br />
              ＃プロ野球　＃試合日程　＃タグテキスト
            </div>
          </div>
        </div>
        <div className="place">
          <div className="container-fluid">
            <div className="cap">場所情報</div>
            <div className="text1">ラフォーレ原宿</div>
            <div className="text2">〒150-0001 東京都渋谷区神宮前１丁目１１−６</div>
            <img className="img_map" src={require('../../../icons/map_area.png')}  alt="" />
            <div className="pin"><span><img src={require('../../../icons/ic_pin.png')}  alt="" /></span>地図を見る</div>
          </div>
        </div>
        <div className="link">
          <div className="container-fluid">
            <div className="cap">関連リンク</div>
            <div className="text"><span><img src={require('../../../icons/ic_website.png')}  alt="" /></span> 横浜DeNAベイスターズ 公式サイト</div>
            <div className="text"><span><img src={require('../../../icons/ic_fb.png')}  alt="" /></span> 横浜DeNAベイスターズ 公式Facebook</div>
            <div className="text"><span><img src={require('../../../icons/ic_fixed.png')}  alt="" /></span> 横浜DeNAベイスターズ 公式Twitter</div>
          </div>
        </div>
        <div id="user">
          <div className="container-fluid">
            <div className="cap">投稿したユーザー</div>
            <div className="card_user">
              <div className="row">
                <div className="col-xs-3 user_name"><img src={require('../../../icons/user_img.png')}  alt="" /></div>
                <div className="col-xs-9">
                  <div className="name">
                    <div className="name1">宮島 太郎</div>
                    <div className="name2">@auplan</div>
                  </div>
                  <div className="inner">
                    <div><span className="fan"><img src={require('../../../icons/ic_fan.png')}  alt="" /></span>84</div>
                    <div><span><img src={require('../../../icons/ic_calender.png')}  alt="" /></span>451</div>
                    <div><span><img src={require('../../../icons/ic_Schedule.png')}  alt="" /></span>660</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cv_bnt">
              <button>ファンになる</button>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="container-fluid">
            <div className="cap">
              <div className="row">
                <div className="col-xs-6">コメント</div>
                <div className="col-xs-6 ic_comment"><img src={require('../../../icons/ic_comment.png')}  alt="" />10件</div>
              </div>
            </div>
            <div className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-12">
                  <span className="form-control-start"><img src={require('../../../icons/ic_comment.png')} alt="" /></span>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" defaultValue="イベント" />
                  <span className="form-control-feedback"><img src={require('../../../icons/ic_delete.png')} alt="" /></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="user">
                <div className="row">
                  <div className="col-xs-2"><img src={require('../../../icons/user_img.png')}  alt="" /></div>
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
                  <div className="col-xs-2"><img src={require('../../../icons/user_img.png')}  alt="" /></div>
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
          </div>
          <div className="more2"><img src={require('../../../icons/more.png')}  alt="" /></div>
        </div>
        <div className="prince_icon">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-5 prince">￥150</div>
              <div className="col-xs-3"><img src={require('../../../icons/ic_follow.png')}  alt="" /> 989</div>
              <div className="col-xs-3"><img src={require('../../../icons/ic_like2.png')}  alt="" /> 346</div>
              <div className="col-xs-1"><img src={require('../../../icons/ic_share.png')}  alt="" /> </div>
            </div>
          </div>
          <div className="cv_bnt_l">
            <button><span><img src={require('../../../icons/ic_follow2.png')}  alt="" /></span>スケジュールをフォロー/購入</button>
          </div>
        </div>
        <div className="recommended">
          <Calendars />
          <Schedules />
        </div>
      </div>
    )
  }
}
