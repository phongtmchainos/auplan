import React from "react";
import "./Search.css";
import SearchCalendar from "../../commons/search/calendar/Calendar";
import SearchSchedule from "../../commons/search/schedule/Schedule";
import SearchAccount from "../../commons/search/account/Account"
import ModalPage from "../../commons/modalPage/ModalPage";
import FromDate from "../../commons/formInput/FromDate";
import Location from "../../commons/formInput/Location";
import SearchInput from "../../commons/formInput/SearchInput";

export default class Search extends React.Component {
    toggleSearchModal(tab = 'schedule') {
        this.props.toggleModal((this.props.paramsModal.tab === 'search' && this.props.activeModal === 'search_modal') ? '' : 'search_modal', {tab: tab});
    }

    openModal(tab) {
        this.props.toggleModal('search_modal', {tab: tab});
    }

    closeModal() {
        this.props.toggleModal('');
    }

    render() {
        return (
            <ModalPage isShowModal={this.props.activeModal === 'search_modal'}>
                <div id="search-page">
                    <div className="search-header">
                        <div className="cancel" onClick={() => this.closeModal()}><img
                            src={require('../../../icons/close.png')} alt=""/></div>
                    </div>

                    <div className={"search"}>
                        <div className="container-fluid">
                            <form className="form-horizontal">
                                {this.props.paramsModal.tab === 'spot' ? <Location/> : <SearchInput/>}
                            </form>
                        </div>
                    </div>

                    <div className="from-to">
                        <div className="container-fluid">
                            <form className="form-horizontal">
                                <FromDate/>
                            </form>
                        </div>
                    </div>
                    <div className={this.props.paramsModal.tab === 'search' ? 'hidden' : ''}>
                        <ul className="nav nav-tabs">
                            <li className={this.props.paramsModal.tab === 'schedule' ? 'active' : ''}
                                onClick={() => this.props.toggleModal('search_modal', {tab: 'schedule'})}><a>スケジュール</a>
                            </li>
                            <li className={this.props.paramsModal.tab === 'calendar' ? 'active' : ''}
                                onClick={() => this.props.toggleModal('search_modal', {tab: 'calendar'})}><a>カレンダー</a>
                            </li>
                            <li className={this.props.paramsModal.tab === 'users' ? 'active' : ''}
                                onClick={() => this.props.toggleModal('search_modal', {tab: 'users'})}><a>ユーザー</a></li>
                            <li className={this.props.paramsModal.tab === 'spot' ? 'active' : ''}
                                onClick={() => this.props.toggleModal('search_modal', {tab: 'spot'})}><a>スポット</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className={`tab-pane ${this.props.paramsModal.tab === 'schedule' ? 'show' : 'hide'}`}>
                                <div className="shcedule_numbeer">4 <span>月</span></div>
                                <SearchSchedule/>
                            </div>
                            <div className={`tab-pane ${this.props.paramsModal.tab === 'calendar' ? 'show' : 'hide'}`}>
                                <SearchCalendar/>
                            </div>
                            <div className={`tab-pane ${this.props.paramsModal.tab === 'users' ? 'show' : 'hide'}`}>
                                <SearchAccount/>
                            </div>
                            <div className={`tab-pane ${this.props.paramsModal.tab === 'spot' ? 'show' : 'hide'}`}>
                                <SearchSchedule/>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalPage>
        )
    }
}
