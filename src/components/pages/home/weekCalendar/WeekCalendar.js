import React from "react";
import moment from "moment";
import "./WeekCalendar.css";
import Carousel from "nuka-carousel";
import Search from "../../../pages/search/Search";


export default class WeekCalendar extends React.Component {
    render() {
        moment.updateLocale('jp', {
            months: ['一', '二', ' 三', '四', '五', ' 六', '七', '八', '九', '十', '十一', '十二'],
            weekdays: ['日', '月', '火', '水', '木', '金', '土'],
        });

        let numberWeek = this.props.numberWeek;

        return (
            <div className="week-days">
                <Carousel
                    renderCenterLeftControls={() => null}
                    renderCenterRightControls={() => null}
                    renderBottomCenterControls={() => null}
                    speed={200}
                    disableKeyboardControls={true}
                >
                    {this.createTable(numberWeek)}
                </Carousel>
                <Search ref={'search'} {...this.props}/>
            </div>
        )
    }

    createTable = (numberWeek) => {
        let table = [];

        for (let i = 0; i < numberWeek; i++) {
            table.push(
                <table key={i}>
                    <thead>
                    <tr>
                        <td></td>
                        <td className={moment().add(0, 'days').format('dd')}>{moment().add(0, 'days').format('dddd')}</td>
                        <td className={moment().add(1, 'days').format('dd')}>{moment().add(1, 'days').format('dddd')}</td>
                        <td className={moment().add(2, 'days').format('dd')}>{moment().add(2, 'days').format('dddd')}</td>
                        <td className={moment().add(3, 'days').format('dd')}>{moment().add(3, 'days').format('dddd')}</td>
                        <td className={moment().add(4, 'days').format('dd')}>{moment().add(4, 'days').format('dddd')}</td>
                        <td className={moment().add(5, 'days').format('dd')}>{moment().add(5, 'days').format('dddd')}</td>
                        <td className={moment().add(6, 'days').format('dd')}>{moment().add(6, 'days').format('dddd')}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td onClick={this.openSearch}>{moment().add(i * 7, 'days').format('MM')}月</td>
                        <td onClick={this.openSearch}>
                            <span className={i === 0 ? 'today' : ''}>{moment().add(i * 7, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(1, 'days').format('dd')}>{moment().add(i * 7 + 1, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(2, 'days').format('dd')}>{moment().add(i * 7 + 2, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(3, 'days').format('dd')}>{moment().add(i * 7 + 3, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(4, 'days').format('dd')}>{moment().add(i * 7 + 4, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(5, 'days').format('dd')}>{moment().add(i * 7 + 5, 'days').format('DD')}</span>
                        </td>
                        <td onClick={() => this.refs.search.openModal('schedule')}>
                            <span
                                className={moment().add(6, 'days').format('dd')}>{moment().add(i * 7 + 6, 'days').format('DD')}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>)
        }
        return table;
    }
}
