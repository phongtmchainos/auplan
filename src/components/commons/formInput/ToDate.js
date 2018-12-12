import React from "react";

export default class ToDate extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="col-xs-10 text-feild">
                                <span className="form-control-start"><img className="calendar-ic"
                                                                          src={require('../../../icons/ic_calender.png')}
                                                                          alt=""/></span>
                    <input type="date" className="form-control" defaultValue="2018年5月13日（日）"/>
                    <span className="form-control-feedback"><img className="dropdown-ic"
                                                                 src={require('../../../icons/ic_down.png')}
                                                                 alt=""/></span>
                </div>
                <label className="control-label col-xs-2" htmlFor="email">まで</label>
            </div>
        );
    };
}