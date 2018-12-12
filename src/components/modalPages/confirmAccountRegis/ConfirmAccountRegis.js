import React from "react";
import ModalPage from "../../commons/modalPage/ModalPage";
import SendAuthenMail from "../sendAuthenMail/SendAuthenMail";
import "./ConfirmAccountRegis.css";
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class confirmAccountRegis extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal} isHeight='true'>
                <div id="Confirm_new_account_registration" className="modal-custom">
                    <div className="Confirm_new_account_registration_content">
                        <div className="cancel">
                            <button onClick={() => this.closeModal()}><img src={require('../../../icons/close.png')}
                                                                           alt=""/></button>
                        </div>
                        <div className="title">Auplanアカウントの作成</div>
                        <div className="content">以下の内容でアカウントを作成します</div>
                        <form className="field form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" defaultValue="Auplan 太郎"/>
                                    <span className="form-control-feedback"><img
                                        src={require('../../../icons/ic_active.png')} alt=""/></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" defaultValue="miyashima@auplan.co.jp"/>
                                    <span className="form-control-feedback"><img
                                        src={require('../../../icons/ic_active.png')} alt=""/></span>
                                </div>
                            </div>
                        </form>
                        <div className="btn-m">
                            <button onClick={() => this.refs.sendAuthenMail.toggleModal()}>アカウントを作成する</button>
                        </div>
                    </div>
                </div>
                <SendAuthenMail ref={'sendAuthenMail'}/>
            </ModalPage>
        )
    }
}