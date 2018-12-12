import React from "react";
import CreateDatePicker from "../../layouts/CreateDatePicker/CreateDatePicker";

export default class FromDate extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="col-xs-10 text-feild">
                    <span className="form-control-start">
                        <img className="calendar-ic" src={require('../../../icons/ic_calender_32px.png')} alt="ic_calender"/>
                    </span>
                    <CreateDatePicker className="form-control" />
                    <span className="form-control-feedback">
                        <img className="delete-ic" src={require('../../../icons/ic_down.png')} alt="ic_down"/>
                    </span>
                    {/*<input type="date" className="form-control" defaultValue="2018年5月6日（日）"/>*/}
                </div>
                <label className="control-label col-xs-2" htmlFor="email">から</label>
            </div>
        );
    };
}