import React from "react";
import "./CalendarRegistration.css";

export default class calendarRegistration extends React.Component {
    render() {
        return (
            <div id="calendar_regis">
                <div className="calendar_regis_header">

                    <div className="cancel"><button><img src={require('../../../icons/arrow-left.png')} onClick={this.props.history.goBack} alt="" /></button></div>
                    <div className="title">新規カレンダー登録</div>
                </div>
                <div className="calendar_regis_title">
                    <div className="title">プロ野球　横浜DeNAベイスターズ公式戦</div>
                </div>
                <div className="feild">
                    <div className="form-group">
                        <span className="form-control-start"><img src={require('../../../icons/ic_public.png')} alt="" /></span>
                        <input type="text" className="form-control"  value="太郎	" alt="" />
                        <span className="form-control-feedback"><img src={require('../../../icons/imgtest.png')} alt="" /></span>
                    </div>
                </div>
                <div className="text">
                    利用規約が入ります。あああああああああああああああああああああああああああああああああああああああああああああああああああ...（以下略）
	</div>

                <div className="btn-m">
                    <button>設定する</button>
                </div>
            </div>
        )
    }
}