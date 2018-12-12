import BaseContainer from "./BaseContainer";
import Calendar from '../../components/pages/calendarMonthly/Calendar';
import * as actionName from './../../actions/calendarMonthly/index';

const mapStateToProps = (state) => {
    console.log("Taaa", state.calendarMonthlyReducers.calendarMonthly);
    return {
        calendarMonthlyData: state.calendarMonthlyReducers.calendarMonthly
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCalendarMonthly: () => dispatch(actionName.fetchCalendarMonthly())
    }
};

const CalendarMonthlyContainer = BaseContainer(mapStateToProps, mapDispatchToProps, Calendar);
export default CalendarMonthlyContainer;
