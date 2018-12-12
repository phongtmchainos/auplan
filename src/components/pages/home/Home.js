import React from 'react';
import "./Home.css";
import Carousel from 'nuka-carousel';
import Calendars from "./calendars/Calendars";
import Schedules from "./schedules/Schedules";
import User from "./users/User";
import WeekCalendar from "./weekCalendar/WeekCalendar";
import Search from "../../pages/search/Search";
import TopScreen from "./../../layouts/baseScreen/TopScreen";
import BasePageComponent from "../../commons/BasePageComponent";

export default class Home extends BasePageComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowRecommendList: true,
            isShowFanList: true,
            isShowRecentList: true,
        };
    }

    componentWillMount() {
        this.fetchData()
    }

    fetchData() {
        if (this.checkEmptyData(this.props.topImages)) {
            this.props.fetchTopImages();
        }

        if (this.checkEmptyData(this.props.scheduleRecommends)) {
            this.props.fetchScheduleRecommend();
        }

        if (this.checkEmptyData(this.props.scheduleRecent)) {
            this.props.fetchScheduleRecent();
        }

        if (this.checkEmptyData(this.props.userRecommends)) {
            this.props.fetchUserRecommend();
        }

        if (this.checkEmptyData(this.props.calendarRecommends)) {
            this.props.fetchCalendarRecommend();
        }

        if (this.checkEmptyData(this.props.calendarRecent)) {
            this.props.fetchCalendarRecent();
        }
    }

    _renderRecommendList(calendars, schedules, users) {
        return (
            <div className="list-content">
                <Calendars calendars={calendars}/>
                <Schedules schedules={schedules}/>
                <User user={users}/>
            </div>
        )
    }

    _renderRecentList(calendars, schedules) {
        return (
            <div className="list-content">
                <Calendars calendars={calendars}/>
                <Schedules schedules={schedules}/>
            </div>
        )
    }

    render() {
        return (
            <div className="main-component">
                <TopScreen/>
                <div className="home">
                    <div className="main-slide">
                        <Carousel
                            autoplay={true}
                            renderCenterLeftControls={() => null}
                            renderCenterRightControls={() => null}
                            wrapAround={true}
                            disableKeyboardControls={true}
                        >
                            {
                                this.props.topImages.map((topImage, index) => {
                                    return (
                                        <div className="slide" key={index}>
                                            <img src={topImage.image_url} alt={`slide ${index}`}/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="calendarArea">
                        <div className="cap">
                            <img className="search-ic" src={require('../../../icons/ic_search_48px.png')}
                                 alt="search icon"/>
                            <span>カレンダー・スケジュールを探す</span>
                        </div>
                        <div className="calendar">
                            <WeekCalendar numberWeek={4} {...this.props}/>
                        </div>
                        <form className="search-form">
                            <img className="search-ic" src={require('../../../icons/ic_search_32-のコピー.png')}
                                 alt="cancel button"/>
                            <input type="text" name={'search-home'} className={"search-input"} placeholder="キーワード検索"/>
                            <img className="delete-ic search-close" src={require('../../../icons/ic_delete.png')}
                                 alt="cancel button"/>
                        </form>
                        <div className="location">
                            <div onClick={() => this.refs.search.openModal('spot')}>
                                <img className="location-ic" src={require('../../../icons/ic_location_48px.png')}
                                     alt="location icon"/>
                                <span>近くのプランを探す</span>
                            </div>
                        </div>
                    </div>
                    <div className="recommended">
                        <div className="cap">
                            <img className="recommended-ic" src={require('../../../icons/ic_recommended_48px.png')}
                                 alt="recommended icon"/>
                            <div>あなたへのおすすめ</div>
                            <img
                                onClick={() => this.setState({isShowRecommendList: !this.state.isShowRecommendList})}
                                className="close-ic"
                                src={require(this.state.isShowRecommendList ? '../../../icons/ic_close_32-のコピー.png' : '../../../icons/ic_open_32-のコピー.png')}
                                alt="closes icon"/>
                        </div>
                        {
                            this.state.isShowRecommendList ? this._renderRecommendList(this.props.calendarRecommends, this.props.scheduleRecommends, this.props.userRecommends) : null
                        }
                    </div>
                    <div className="recommended">
                        <div className="cap">
                            <img className="alert-ic" src={require('../../../icons/ic_alart_48.png')}
                                 alt="recommended icon"/>
                            <div>新着プラン</div>
                            <img
                                onClick={() => this.setState({isShowRecentList: !this.state.isShowRecentList})}
                                className="close-ic"
                                src={require(this.state.isShowRecentList ? '../../../icons/ic_close_32-のコピー.png' : '../../../icons/ic_open_32-のコピー.png')}
                                alt="closes icon"/>
                        </div>
                        {
                            this.state.isShowRecentList ? this._renderRecentList(this.props.calendarRecent, this.props.scheduleRecent) : null
                        }
                    </div>
                    <Search ref={'search'} {...this.props} />
                </div>
            </div>
        );
    }

}
