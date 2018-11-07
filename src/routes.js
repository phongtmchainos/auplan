import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/pages/HomeContainer';
import CalendarContainer from './containers/pages/CalendarContainer';
import Login from "./components/pages/login/Login";
import Search from "./components/pages/search/Search";
import Mypage from "./components/pages/mypage/Mypage";
import MyPageEdit from "./components/pages/mypageEdit/MyPageEdit";
import ScheduleDetail from "./components/pages/scheduleDetail/ScheduleDetail";
import ScheduleEntryPopup from "./components/pages/scheduleEntryPopup/ScheduleEntryPopup";
import ScheduleNewEntry from "./components/pages/scheduleNewEntry/ScheduleNewEntry";
import CalendarDetail from "./components/pages/calendarDetail/CalendarDetail";
import CalendarNewEntry from "./components/pages/calendarNewEntry/CalendarNewEntry";
import Notice from "./components/pages/notice/Notice";
import NotFound from './components/pages/notFound/NotFound';

// cordovaのrootがindex.htmlなので、仕方なくindex.htmlを追加
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="*/index.html" component={HomeContainer} />
    <Route exact path="/calendar-monthly" component={CalendarContainer} />
    <Route exact path="/calendar-new-entry" component={CalendarNewEntry} />
    <Route exact path="/calendar-detail" component={CalendarDetail} />
    <Route exact path="/calendar-monthly" component={CalendarContainer} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/my-page" component={Mypage} />
    <Route exact path="/my-page-edit" component={MyPageEdit} />
    <Route exact path="/schedule-detail" component={ScheduleDetail} />
    <Route exact path="/schedule-entry-popup" component={ScheduleEntryPopup} />
    <Route exact path="/schedule-new-entry" component={ScheduleNewEntry} />
    <Route exact path="/notice" component={Notice} />
    <Route exact path="" component={NotFound} />
  </Switch>
);

export default Routes;
