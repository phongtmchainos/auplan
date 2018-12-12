import React from 'react';
import configApp from "../../configs/App";
import moment from "moment";
import $ from "jquery";

export default class BaseComponent extends React.Component {
    config = configApp;

    constructor(props) {
        super(props);
        this.state = {
            activeCloseSearch: false
        }
    }

    componentDidMount() {
        this.state = {
            resizeData: this.getResizeScreen()
        };

        // Resize height div main
        $('.container').css('height', this.state.resizeData.viewportHeight + 'px');

        // Hidden footer when click for show a modal
        $('.show-modal').click(function () {
            $('.footer').css('display', 'none');
        });

        // Show footer when click
        $('a, .footer-show').click(function () {
            $('.footer').css('display', 'flex');
        });

        // Default hidden button delete value enter to input search
        let searchClose = $('.search-close');

        searchClose.css('display', 'none');

        // Show button delete value enter to input search
        $('.search-input').keyup(function () {
            searchClose.css('display', $.trim($(this).val()) ? 'block' : "none");
        });

        // Empty input search data and hidden close image
        searchClose.on('click', function () {
            $(this).closest('form').find('.search-input').val("");
            $(this).css('display', 'none');
        });

        // Set config for component
        this.configMoment();
    }

    configMoment = () => {
        moment.updateLocale('jp', {
            weekdays: ['日', '月', '火', '水', '木', '金', '土'],
        });
        moment.locale("jp", {
            week: {
                dow: 1 //Monday is the first day of the week.
            }
        });
    };

    getSchedulesOfCalendar = (selectedDateTime = false, nameCompare = 'start_period') => {
        let schedules = [];

        this.props.calendarMonthlyData.map((calendar) => {
            if (this.getDateTimeFormat(selectedDateTime) === this.getDateTimeFormat(calendar[nameCompare])) {
                schedules.push(calendar);
            }
        });

        return {schedules: schedules, outContent: this.getInfoOfDatetime(selectedDateTime)};
    };

    getDateTimeFormat = (dateTimeString = false, typeCompare = 'YYYY-MM-DD') => {
        return dateTimeString === false
            ? moment().format(typeCompare)
            : moment(dateTimeString, typeCompare).format(typeCompare);
    };

    getInfoOfDatetime = (dateTime) => {
        return {
            day: moment(dateTime).format("DD"),
            month: moment(dateTime).format("MM"),
            year: moment(dateTime).format("YY"),
            hour: moment(dateTime).format("HH:mm"),
            weekdays: moment(dateTime).format("dddd")
        };
    };

    getResizeScreen = () => {
        let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let isPortrait = viewportHeight > viewportWidth;
        let newViewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let newViewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let hasOrientationChanged = (newViewportHeight > newViewportWidth) !== isPortrait;
        // let addressbarHeight = 130;

        if (!hasOrientationChanged && (newViewportHeight !== viewportHeight)) {
            //addressbarHeight = Math.abs(newViewportHeight - viewportHeight);
            if (newViewportHeight < viewportHeight) {
                // Android Chrome address bar has appeared
            } else {
                // Android Chrome address bar has disappeared
            }
        } else if (hasOrientationChanged) {
            // Orientation change
        }

        return {
            viewportHeight: newViewportHeight,
            viewportWidth: newViewportWidth,
            isPortrait: viewportHeight > viewportWidth,
        };
    };

}