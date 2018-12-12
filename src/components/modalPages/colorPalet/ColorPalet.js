import React from 'react';
import ModalPage from "../../commons/modalPage/ModalPage";
import './ColorPalet.css';
import BaseModalComponent from "../../commons/BaseModalComponent";

export default class colorPalet extends BaseModalComponent {
    render() {
        return (
            <ModalPage isShowModal={this.state.isShowModal}>
                <div className="color-palet">
                    <div className="palet-header">
                        <img src={require('../../../icons/ic_back.png')} alt="" onClick={() => this.closeModal()} />
                        <span>色</span>
                    </div>
                    <div className="color-palet-content">
                        <div className="color-palet-items">
                            <div className="items-color" style={{ backgroundColor: '#28cbd5' }}></div>
                            <div className="items-text">ピクサ</div>
                            {/* <div className="items-active"><img src={require('../../../icons/ic_check.png')} alt="" /></div> */}
                        </div>
                        <div className="color-palet-items">
                            <div className="items-color" style={{ backgroundColor: '#f6ec00' }}></div>
                            <div className="items-text">ピクサ</div>
                            {/* <div className="items-active"><img src={require('../../../icons/ic_check.png')} alt="" /></div> */}
                        </div>
                        <div className="color-palet-items">
                            <div className="items-color" style={{ backgroundColor: '#1100cb' }}></div>
                            <div className="items-text">ピクサ</div>
                            <div className="items-active"><img src={require('../../../icons/ic_check.png')} alt="" /></div>
                        </div>
                        <div className="color-palet-items">
                            <div className="items-color" style={{ backgroundColor: '#ff0006' }}></div>
                            <div className="items-text">ピクサ</div>
                            {/* <div className="items-active"><img src={require('../../../icons/ic_check.png')} alt="" /></div> */}
                        </div>
                    </div>
                </div>
            </ModalPage>
        )
    }
}