import React from "react";
import SearchCalendar from "../../../commons/search/calendar/Calendar";
import ModalPage from "../../../commons/modalPage/ModalPage";

import "./RecCalendarList.css";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            isShowModal: false
        }
    }

    toggleModal() {
        this.setState({isShowModal: !this.state.isShowModal});
    }

    closeModal() {
        this.setState({isShowModal: false});
    }

    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal}>
                <div id="RecCalendarlist">
                    <div className="search_header">
                        <div className="cancel" onClick={() => this.closeModal()}><img className="delete-ic"
                                                                                       src={require('../../../../icons/close.png')}
                                                                                       alt=""/></div>
                        <div className="title">カレンダーを選択</div>
                    </div>
                    <div className="search">
                        <SearchCalendar />
                    </div>
                </div>
            </ModalPage>
        )
    }
}