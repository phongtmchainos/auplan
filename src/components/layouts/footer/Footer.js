import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Search from "../../pages/search/Search";
import Mypage from "../../pages/mypage/Mypage";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="btn">
            <Link to="/">
              <img className="logo-ic" src={require('../../../icons/logo_ft.png')} alt="logo icon"/>
            </Link>
          </div>
          <div className="btn" onClick={() => this.refs.search.toggleModal()} >
            <img className="search-ic" src={require('../../../icons/ic_search_48.png')} alt="search icon"/>
          </div>
          <div className="btn center-btn">
            <div className="calendar">
              <Link to="/calendar-monthly">
                <img className="calendar-ic" src={require('../../../icons/ic_calender_48px.png')} alt="calendar-icon"/>
              </Link>
            </div>
          </div>
          <div className="btn notification">
            <Link to="/notice">
              <img className="alert-ic" src={require('../../../icons/ic_alart_481.png')} alt="notification-icon"/>
            </Link>
            <div className="barge">
              4
            </div>
          </div>
          <div className="btn" onClick={() => this.refs.mypage.toggleModal()}>
            <img className="user-ic" src={require('../../../icons/ic_user_48.png')} alt="user-icon"/>
          </div>
        </div>
        <Search ref={'search'}/>
        <Mypage ref={'mypage'}/>
      </div>
    )
  }
}
