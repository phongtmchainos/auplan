import React from "react";
import "./ModalPage.css";

export default class ModalPage extends React.Component {
  render() {
    return (
      <div className={`modal-page ${this.props.isShowModal ? 'modal-show' : 'modal-hide'}`}>
        <div className="content modal-page-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}