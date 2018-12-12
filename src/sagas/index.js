import {fork} from 'redux-saga/effects';
import {
    watchFetchHomeTopImages,
    watchFetchHomeCalendarRecommend,
    watchFetchHomeCalendarRecent,
    watchFetchHomeUserRecommend,
    watchFetchHomeScheduleRecommend,
    watchFetchHomeScheduleRecent,
} from './homeSagas';

import {
    watchFetchCalendarMonthly
} from './clendarMonthlySagas'

export default function* rootSagas() {
    yield fork(watchFetchHomeTopImages);
    yield fork(watchFetchHomeCalendarRecommend);
    yield fork(watchFetchHomeCalendarRecent);
    yield fork(watchFetchHomeUserRecommend);
    yield fork(watchFetchHomeScheduleRecommend);
    yield fork(watchFetchHomeScheduleRecent);
    yield fork(watchFetchCalendarMonthly);
}
