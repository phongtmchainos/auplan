import React from "react";
import "./Search.css";
import ModalPage from "../../commons/modalPage/ModalPage";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      isShowModal: false
    }
  }

  toggleModal() {
    this.setState({isShowModal: !this.state.isShowModal});
  }

  closeModal() {
    this.setState({isShowModal: false});
  }

  render() {
    return (
      <ModalPage isShowModal={this.state.isShowModal}>
        <div id="search-page">
          <div className="search-header">
            <div className="cancel" onClick={() => this.closeModal()}>キャンセル</div>
          </div>
          <div className="search">
            <div className="container-fluid">
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-xs-12">
                    <span className="form-control-start"><img className="delete-ic" src={require('../../../icons/ic_search.png')} alt="" /></span>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" defaultValue="イベント" />
                    <span className="form-control-feedback"><img className="delete-ic" src={require('../../../icons/ic_delete.png')} alt="" /></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="from-to">
            <div className="container-fluid">
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-xs-10 text-feild">
                    <span className="form-control-start"><img className="calendar-ic" src={require('../../../icons/ic_calender_32px.png')} alt="" /></span>
                    <input type="text" className="form-control" id="email" defaultValue="2018年5月6日（日）" />
                    <span className="form-control-feedback"><img className="dropdown-ic" src={require('../../../icons/ic_down.png')} alt="" /></span>
                  </div>
                  <label className="control-label col-xs-2" htmlFor="email">から</label>
                </div>
                <div className="form-group">
                  <div className="col-xs-10 text-feild">
                    <span className="form-control-start"><img className="calendar-ic" src={require('../../../icons/ic_calender.png')} alt="" /></span>
                    <input type="text" className="form-control" id="email" defaultValue="2018年5月13日（日）" />
                    <span className="form-control-feedback"><img className="dropdown-ic" src={require('../../../icons/ic_down.png')} alt="" /></span>
                  </div>
                  <label className="control-label col-xs-2" htmlFor="email">まで</label>
                </div>
              </form>
            </div>
          </div>
          <div className="tab">
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#calendar">スケジュール</a></li>
              <li><a data-toggle="tab" href="#schedule">カレンダー</a></li>
              <li><a data-toggle="tab" href="#users">ユーザー</a></li>
              <li><a data-toggle="tab" href="#spot">スポット</a></li>
            </ul>
            <div className="container-fluid">
              <div className="tab-content">
                <div id="schedule" className="tab-pane fade ">
                  <div className="schedule">
                    <div className="schedule_item">
                      <div className="row">
                        <div className="col-xs-2 left">27 <p className="gray">(金)</p>
                        </div>
                        <div className="col-xs-10">
                          <div className="schedule_content">
                            <div className="schedule">
                              <div className="content">
                                DeNA vs ヤクルト
                                <div className="date">
                                  <div className="from">4 <span>月</span> 28 <span>日</span> <span className="gray">(金)</span></div>
                                </div>
                                <div className="house">
                                  9:00-18:30
                                  <span>最終日は17:00まで</span>
                                </div>
                              </div>
                            </div>
                            <div className="img">
                              <img src={require('../../../icons/img_1.png')} alt="" />
                            </div>
                            <div className="name">
                              <div className="row">
                                <div className="col-xs-2"><img className="user-ic" src={require('../../../icons/icon.png')} alt="" /></div>
                                <div className="col-xs-6">
                                  <div className="fullname">宮島 太郎</div>
                                  <div className="username">@auplan</div>
                                </div>
                                <div className="col-xs-4 private">
                                  <img className="public-ic" src={require('../../../icons/ic_public.png')} alt="" />公開
                                </div>
                              </div>
                            </div>
                            <div className="prince_icon">
                              <div className="row">
                                <div className="col-xs-5 prince">￥150</div>
                                <div className="col-xs-3">
                                  <div className="row d_flex_center">
                                    <div className="col-xs-5"><img className="download-ic" src={require('../../../icons/ic_download.png')} alt="" /> </div>
                                    <div className="col-xs-5">989</div>
                                  </div>
                                </div>
                                <div className="col-xs-3">
                                  <div className="row d_flex_center">
                                    <div className="col-xs-5"><img className="like-ic" src={require('../../../icons/ic_like2.png')} alt="" /></div>
                                    <div className="col-xs-5">346</div>
                                  </div>
                                </div>
                                <div className="col-xs-1"><img className="share-ic" src={require('../../../icons/share.png')} alt="" /> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="calendar" className="tab-pane fade in active ">
                  <div className="calander_item">
                    <div className="calendar-ic" >
                      <img src={require('../../../icons/ic_calender_blue.png')} alt="" />
                      <span className="title">ラフォーレ原宿イベントカレンダー</span>
                    </div>
                    <div className="calander_content">
                      <div className="name">
                        <div className="row">
                          <div className="col-xs-2"><img className="user-ic" src={require('../../../icons/icon.png')} alt="" /></div>
                          <div className="col-xs-6">
                            <div className="fullname">宮島 太郎</div>
                            <div className="username">@auplan</div>
                          </div>
                          <div className="col-xs-4 private">
                            <img className="public-ic" src={require('../../../icons/ic_public.png')} alt="" />公開
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={require('../../../icons/img_1.png')} alt="" />
                      </div>
                      <div className="prince_icon">
                        <div className="row">
                          <div className="col-xs-4 prince">￥150</div>
                          <div className="col-xs-3">
                            <div className="row d_flex_center">
                              <div className="col-xs-5 img_follow"> <img src={require('../../../icons/follow.png')} alt="" /></div>
                              <div className="col-xs-5">989</div>
                            </div>
                          </div>

                          <div className="col-xs-3">
                            <div className="row d_flex_center">
                              <div className="col-xs-5"><img className="like-ic" src={require('../../../icons/ic_like2.png')} alt="" /></div>
                              <div className="col-xs-5">3346</div>
                            </div>
                          </div>
                          <div className="col-xs-2"><img className="share-ic" src={require('../../../icons/share.png')} alt="" /> </div>
                        </div>
                      </div>
                      <div className="schedule">
                        <div className="title">
                          直近のスケジュール
                        </div>
                        <div className="content">
                          ピクサー・ザ・フレンドシップ <br />
                          ～仲間といっしょに冒険の世界へ
                          <div className="date">
                            <div className="from">4 <span>月</span> 28 <span>日</span> <span className="blue">(土)</span></div>
                            <img src={require('../../../icons/arrown-right.png')} alt="" />
                            <div className="to">5 <span>月</span> 6 <span>日</span> <span className="red">(日)</span></div>
                          </div>
                          <div className="house">
                            9:00-18:30
                            <span>最終日は17:00まで</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="calander_item">
                    <div className="calendar-ic" >
                      <img src={require('../../../icons/ic_calender_blue.png')} alt="" />
                      <span className="title">ラフォーレ原宿イベントカレンダー</span>
                    </div>
                    <div className="calander_content">
                      <div className="name">
                        <div className="row">
                          <div className="col-xs-2"><img className="user-ic" src={require('../../../icons/icon.png')} alt="" /></div>
                          <div className="col-xs-6">
                            <div className="fullname">宮島 太郎</div>
                            <div className="username">@auplan</div>
                          </div>
                          <div className="col-xs-4 private">
                            <img className="public-ic" src={require('../../../icons/ic_public.png')} alt="" />公開
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={require('../../../icons/img_1.png')} alt="" />
                      </div>
                      <div className="prince_icon">
                        <div className="row">
                          <div className="col-xs-4 prince">￥150</div>
                          <div className="col-xs-3">
                            <div className="row d_flex_center">
                              <div className="col-xs-5 img_follow"> <img src={require('../../../icons/follow.png')} alt="" /></div>
                              <div className="col-xs-5">989</div>
                            </div>
                          </div>

                          <div className="col-xs-3">
                            <div className="row d_flex_center">
                              <div className="col-xs-5"><img className="like-ic" src={require('../../../icons/ic_like2.png')} alt="" /></div>
                              <div className="col-xs-5">3346</div>
                            </div>
                          </div>
                          <div className="col-xs-2"><img className="share-ic" src={require('../../../icons/share.png')} alt="" /> </div>
                        </div>
                      </div>
                      <div className="schedule">
                        <div className="title">
                          直近のスケジュール
                        </div>
                        <div className="content">
                          ピクサー・ザ・フレンドシップ <br />
                          ～仲間といっしょに冒険の世界へ
                          <div className="date">
                            <div className="from">4 <span>月</span> 28 <span>日</span> <span className="blue">(土)</span></div>
                            <img src={require('../../../icons/arrown-right.png')} alt="" />
                            <div className="to">5 <span>月</span> 6 <span>日</span> <span className="red">(日)</span></div>
                          </div>
                          <div className="house">
                            9:00-18:30
                            <span>最終日は17:00まで</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="users" className="tab-pane fade ">
                  <div className="search_account">
                    <div className="card_user">
                      <div className="row">
                        <div className="col-xs-2 user_icon">
                          <img src={require('../../../icons/ic_icon3.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                          <div className="name">
                            但野 茂出留
                            <p>@pixta_model</p>
                          </div>
                          <div className="inner">
                            <div className="fan">
                              <img src={require('../../../icons/ic_fan.png')} alt="" /><span>9</span>
                            </div>
                            <div className="post">
                              <img src={require('../../../icons/ic_post.png')} alt="" /><span>1107</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_user">
                      <div className="row">
                        <div className="col-xs-2 user_icon">
                          <img src={require('../../../icons/ic_icon2.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                          <div className="name">
                            中条あやみ
                            <p><span><img src={require('../../../icons/official.png')} alt="" /></span>@nakajo_ayami</p>
                          </div>
                          <div className="inner">
                            <div className="fan">
                              <img src={require('../../../icons/ic_fan.png')} alt="" /><span>45万</span>
                            </div>
                            <div className="post">
                              <img src={require('../../../icons/ic_post.png')} alt="" /><span>233</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_user">
                      <div className="row">
                        <div className="col-xs-2 user_icon">
                          <img src={require('../../../icons/ic_icon.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                          <div className="name">
                            小田急百貨店 新宿店
                            <p><span><img src={require('../../../icons/official.png')} alt="" /></span>@odakyu-dept</p>
                          </div>
                          <div className="inner">
                            <div className="fan">
                              <img src={require('../../../icons/ic_fan.png')} alt="" /><span>3.5万</span>
                            </div>
                            <div className="post">
                              <img src={require('../../../icons/ic_post.png')} alt="" /><span>96</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_user">
                      <div className="row">
                        <div className="col-xs-2 user_icon">
                          <img src={require('../../../icons/ic_icon4.png')} alt="" />
                        </div>
                        <div className="col-xs-10">
                          <div className="name">
                            但野 茂出留
                            <p>@pixta_model</p>
                          </div>
                          <div className="inner">
                            <div className="fan">
                              <img src={require('../../../icons/ic_fan.png')} alt="" /><span>9</span>
                            </div>
                            <div className="post">
                              <img src={require('../../../icons/ic_post.png')} alt="" /><span>1107</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="spot" className="tab-pane fade">
                  <div className="search">
                    <div className="cap">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalPage>
    )
  }
}