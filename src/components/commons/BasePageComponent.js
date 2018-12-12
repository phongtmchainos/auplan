import BaseComponent from "./BaseComponent";

export default class BasePageComponent extends BaseComponent {
    componentDidUpdate() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    checkEmptyData = (fetchName, compareType = []) => {
        return fetchName !== compareType;
    };

    checkShowPriceInCalendarSchedule = (price, isToday) => {
        let label = '無料';

        switch (price) {
            case 0:
                label = '無料';
                break;
            default:
                label = isToday === true ? '本日開催です' : label;
                break;
        }

        return label;
    }

}