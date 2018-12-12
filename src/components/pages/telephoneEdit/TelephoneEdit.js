import React from "react";
import "./TelephoneEdit.css";

export default class editPhone extends React.Component {
    render() {
        return (
            <div className="editPhone">
                <div className="editPhone_header">
                    <div className="cancel" onClick={this.props.history.goBack}><img src={require('../../../icons/arrow-left.png')} alt=""/></div>
                    <div className="title">住所・電話番号</div>
                </div>
                <div className="name">
                    <div className="form-group">
                        <span className="form-control-start">姓</span>
                        <input type="text" className="form-control"  value={"宮島"} alt="" />
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">名</span>
                        <input type="text" className="form-control"  value="太郎" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">姓カナ</span>
                        <input type="text" className="form-control"  placeholder="例）ミヤシマ" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">名カナ</span>
                        <input type="text" className="form-control"  placeholder="例）タロウ" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                </div>
                <div className="area"></div>
                <div className="address">
                    <div className="form-group">
                        <span className="form-control-start">郵便番号</span>
                        <input type="text" className="form-control"  placeholder="例）1234567" alt="" />
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">都道府県</span>
                        <input type="text" className="form-control"  placeholder="選択してください	" alt="" />
                        <span className="form-control-feedback"><img src={require('../../../icons/arrown-right.png')} alt="" /></span>
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">市区町村</span>
                        <input type="text" className="form-control"  placeholder="例）渋谷区" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">番地</span>
                        <input type="text" className="form-control"  placeholder="例）桜丘23-17" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                    <div className="form-group">
                        <span className="form-control-start">建物など</span>
                        <input type="text" className="form-control"  placeholder="※任意" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                </div>
                <div className="area"></div>
                <div className="phone">
                    <div className="form-group">
                        <span className="form-control-start">電話番号</span>
                        <input type="text" className="form-control"  placeholder="例）08012345678" alt="" />
                        <span className="form-control-feedback"></span>
                    </div>
                </div>
                <div className="btn-m">
                    <button>設定する</button>
                </div>
            </div>
        )
    }
}