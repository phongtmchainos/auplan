import Home from '../../components/pages/home/Home';
import * as actionName from './../../actions/home/home';
import BaseContainer from "./BaseContainer";

const mapStateToProps = (state) => {
    return {
        topImages: state.imageReducers.homeTopImages,
        scheduleRecommends: state.scheduleReducers.homeScheduleRecommends,
        scheduleRecent: state.scheduleReducers.homeScheduleRecent,
        userRecommends: state.userReducers.homeUserRecommends,
        calendarRecommends: state.calendarReducers.homeCalendarRecommends,
        calendarRecent: state.calendarReducers.homeCalendarRecent,
        activeModal: state.screenStatusReducers.activeModal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopImages: () => dispatch(actionName.fetchTopImages()),
        fetchScheduleRecommend: () => dispatch(actionName.fetchScheduleRecommend()),
        fetchUserRecommend: () => dispatch(actionName.fetchUserRecommend()),
        fetchScheduleRecent: () => dispatch(actionName.fetchScheduleRecent()),
        fetchCalendarRecommend: () => dispatch(actionName.fetchCalendarRecommend()),
        fetchCalendarRecent: () => dispatch(actionName.fetchCalendarRecent())
    }
};

const HomeContainer = BaseContainer(mapStateToProps, mapDispatchToProps, Home);
export default HomeContainer;
