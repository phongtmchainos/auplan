import React from "react";
import SearchAccount from "../../../commons/search/account/Account"
import ModalPage from "../../../commons/modalPage/ModalPage";

import "./RecUserList.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      isShowModal: false
    }
  }

  toggleModal() {
    this.setState({ isShowModal: !this.state.isShowModal });
  }

  closeModal() {
    this.setState({ isShowModal: false });
  }

  render() {
    return (
      <ModalPage isShowModal={this.state.isShowModal}>
        <div id="recUserList">
          <div className="search_header">
            <div className="cancel" onClick={() => this.closeModal()}><img className="delete-ic" src={require('../../../../icons/close.png')} alt="" /></div>
            <div className="title">カレンダーを選択</div>
          </div>
          <div className="search">
            <SearchAccount/>
          </div>
        </div>
      </ModalPage>
    )
  }
}