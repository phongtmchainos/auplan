import React from "react";
import SearchSchedule from "../../../commons/search/schedule/Schedule";
import ModalPage from "../../../commons/modalPage/ModalPage";
import BaseModalComponent from "../../../commons/BaseModalComponent";

import "./RecScheduleList.css";

export default class Search extends BaseModalComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            isShowModal: false
        }
    }

    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal}>
                <div id="recScheduleList">
                    <div className="search_header">
                        <div className="cancel" onClick={() => this.closeModal()}><img className="delete-ic"
                                                                                       src={require('../../../../icons/close.png')}
                                                                                       alt=""/></div>
                        <div className="title">カレンダーを選択</div>
                    </div>
                    <div className="search">
                        <SearchSchedule/>
                    </div>
                </div>
            </ModalPage>
        )
    }
}