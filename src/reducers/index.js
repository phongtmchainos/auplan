import {combineReducers} from 'redux';
import {imageReducers} from './imageReducers';
import {calendarReducers} from './calendarReducers';
import {scheduleReducers} from './scheduleReducers';
import {userReducers} from './userReducers';
import {screenStatusReducers} from './screenStatusReducers';
import {calendarMonthlyReducers} from './calendarMonthlyReducers';

const rootReducer = combineReducers({
    imageReducers,
    calendarReducers,
    scheduleReducers,
    userReducers,
    screenStatusReducers,
    calendarMonthlyReducers,
});

export default rootReducer;
