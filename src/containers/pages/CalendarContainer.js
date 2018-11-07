import Calendar from '../../components/pages/calendarMonthly/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default CalendarContainer;
