import React from "react";
import "./Mypage.css";
import { Link } from "react-router-dom";
import ModalPage from "../../commons/modalPage/ModalPage";

export default class Mypage extends React.Component {
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
        <div className="mypage">
          <div className=" mypage-header">
            <div className="cancel" onClick={() => this.closeModal()}><img src={require('../../../icons/ic_back.png')} alt="" /></div>
          </div>
          <div id="content">
            <div className="card_schedule">
              <div className="container-fluid">
                <div className="user">
                  <div className="row">
                    <div className="user_icon col-xs-4">
                      <img src={require('../../../icons/user_icon.png')} alt="" />
                    </div>
                    <div className="col-xs-4">
                      <div className="name">宮島 太郎</div>
                      <div className="nick">@auplan</div>
                    </div>
                    <div className="col-xs-4 private">
                      <Link to="my-page-edit">
                        <img src={require('../../../icons/ic_edit1.png')} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <div className="list">
                    <div className="row">
                      <div className="col-xs-3 ">
                        <div className="list_item">
                          <div> ファン数</div>
                          <p> 84</p>
                        </div>
                      </div>
                      <div className="col-xs-3 center">
                        <div className="list_item">
                          <div> 投稿数</div>
                          <p> 987</p>
                        </div>
                      </div>
                      <div className="col-xs-3 ">
                        <div className="list_item">
                          <div> フォロー数</div>
                          <p> 3325</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cv">
              <div className="container-fluid">
                <div className="cv_bnt">
                  <div className="button">ファンになる</div>
                </div>
              </div>
            </div>
            <div className="more">
              <div className="container-fluid">
                自己紹介文入ります自己紹介文入ります自己紹介文入 br
                ります自己紹介文入ります。
                自己紹介文入ります自己紹介文入ります。
              </div>
            </div>
            <div className="cv">
              <div className="container-fluid">
                <div className="cv_bnt cv_bnt2">
                  <div className="button"><span><img src={require('../../../icons/ic_calender1.png')} alt="" /></span>ファンになる</div>
                </div>
              </div>
            </div>
            <div className="ubility">
              <div className="container-fluid">
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-xs-10 text-feild">
                      <span className="form-control-start"><img src={require('../../../icons/ic_search.png')} alt="" /></span>
                      <input type="text" className="form-control" />
                    </div>
                    <label className="control-label col-xs-2" htmlFor="email"><img src={require('../../../icons/ic_sort.png')} alt="" /></label>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#calendar">スケジュール</a></li>
                <li><a data-toggle="tab" href="#schedule">カレンダー</a></li>
              </ul>
              <div className="container-fluid">
                <div className="tab-content">
                  {/* tag calendar page search */}
                  <div id="calendar" className="tab-pane fade in active">
                    <img src={require('../../../images/mypage_2.png')} alt="" />
                  </div>
                  <div id="schedule" className="tab-pane fade ">
                    {/* tag schedule page search */}
                    <img src={require('../../../images/mypage_1.png')} alt="" />
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
