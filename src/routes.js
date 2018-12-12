import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/pages/HomeContainer';
import CalendarMonthlyContainer from './containers/pages/CalendarMonthlyContainer';
// import Login from "./components/pages/login/Login";
import Search from "./components/pages/search/Search";
import TopSearch from "./components/pages/search/TopSearch";
import NoticeContainer from "./containers/pages/NoticeContainer";
import MyUserContainer from "./containers/pages/MyUserContainer";
import MyPageContainer from "./containers/pages/MyPageContainer";
import MyPageEditContainer from "./containers/pages/MyPageEditContainer";
import ScheduleDetailContainer from "./containers/pages/ScheduleDetailContainer";
import ScheduleEntryPopupContainer from "./containers/pages/ScheduleEntryPopupContainer";
import ScheduleNewEntryContainer from "./containers/pages/ScheduleNewEntryContainer";
import CalendarSettingsContainer from "./containers/pages/CalendarSettingsContainer";
import CalendarDetailContainer from "./containers/pages/CalendarDetailContainer";
import CalendarNewEntryContainer from "./containers/pages/CalendarNewEntryContainer";
import MyCalendarListContainer from "./containers/pages/MyCalendarListContainer"
// import NoticeContainer from "./containers/pages/NoticeContainer";
import EditPhoneContainer from "./components/pages/telephoneEdit/TelephoneEdit";
import CalendarRegistrationContainer from "./containers/pages/CalendarRegistrationContainer";
import EditPersonalInfoContainer from "./containers/pages/EditPersonalInfoContainer";
import MailPassword from "./components/pages/mailPassword/MailPassword";
//Confirm new account registration
// Resetting a password
import ResetPassMailContainer from "./containers/pages/ResetPassMailContainer";
import SyncCalendarSettingContainer from "./containers/pages/SyncCalendarSettingContainer";
import NotFound from './components/pages/notFound/NotFound';

// cordovaのrootがindex.htmlなので、仕方なくindex.htmlを追加
export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={(props) => <HomeContainer {...this.props} {...props} />}/>
                <Route exact path="*/index.html" render={(props) => <HomeContainer {...this.props} {...props} />}/>
                <Route exact path="/calendar-new-entry" component={CalendarNewEntryContainer}/>
                <Route exact path="/calendar-detail"
                       render={(props) => <CalendarDetailContainer {...this.props} {...props} />}/>
                <Route exact path="/calendar-monthly"
                       render={(props) => <CalendarMonthlyContainer {...this.props} {...props} />}/>
                <Route exact path="/search-top" render={(props) => <TopSearch {...this.props} {...props} />}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/my-user" render={(props) => <MyUserContainer {...this.props} {...props} />}/>
                <Route exact path="/my-page" render={(props) => <MyPageContainer {...this.props} {...props} />}/>
                <Route exact path="/my-page-edit"
                       render={(props) => <MyPageEditContainer {...this.props} {...props} />}/>
                <Route exact path="/schedule-detail"
                       render={(props) => <ScheduleDetailContainer {...this.props} {...props} />}/>
                <Route exact path="/schedule-entry-popup"
                       render={(props) => <ScheduleEntryPopupContainer {...this.props} {...props} />}/>
                <Route exact path="/schedule-new-entry"
                       render={(props) => <ScheduleNewEntryContainer {...this.props} {...props} />}/>
                <Route exact path="/notice" render={(props) => <NoticeContainer {...this.props} {...props} />}/>
                <Route exact path="/edit-phone" render={(props) => <EditPhoneContainer {...this.props} {...props} />}/>
                <Route exact path="/calendar-registration"
                       render={(props) => <CalendarRegistrationContainer {...this.props} {...props} />}/>
                <Route exact path="/my-calendar-list"
                       render={(props) => <MyCalendarListContainer {...this.props} {...props} />}/>
                <Route exact path="/edit-personal-info"
                       render={(props) => <EditPersonalInfoContainer {...this.props} {...props} />}/>
                <Route exact path="/mail-password" render={(props) => <MailPassword {...this.props} {...props} />}/>
                <Route exact path="/reset-password-mail"
                       render={(props) => <ResetPassMailContainer {...this.props} {...props} />}/>
                <Route exact path="/sync-calendar-setting"
                       render={(props) => <SyncCalendarSettingContainer {...this.props} {...props} />}/>
                <Route exact path="/calendar-settings"
                       render={(props) => <CalendarSettingsContainer {...this.props} {...props} />}/>
                <Route exact path="" component={NotFound}/>
            </Switch>
        )
    }
}
