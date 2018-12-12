import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Search from "../../pages/search/Search";
// import Mypage from "../../pages/mypage/Mypage";

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
                    <div className="btn">
                        <Link to="/search-top">
                            <img className="search-ic" src={require('../../../icons/ic_search_48.png')}
                                 alt="search icon"/>
                        </Link>
                    </div>
                    <div className="btn center-btn">
                        <div className="calendar">
                            <Link to="/calendar-monthly">
                                <img className="calendar-ic" src={require('../../../icons/ic_calender_48px.png')}
                                     alt="calendar-icon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="btn notification">
                        <Link to="/notice">
                            <img className="alert-ic" src={require('../../../icons/ic_alart_481.png')}
                                 alt="notification-icon"/>
                            <div className="barge">
                                4
                            </div>
                        </Link>
                    </div>
                    <div className="btn">
                        <Link to="/my-page">
                            <img className="user-ic" src={require('../../../icons/ic_user_48.png')} alt="user-icon"/>
                        </Link>
                    </div>
                </div>
                <Search ref={'search'} {...this.props} />
            </div>
        )
    }
}
