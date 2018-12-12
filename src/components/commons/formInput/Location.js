import React from "react";

export default class Location extends React.Component {
    render() {
        return (
            <div className="form-group col-xs-12">
                <div className="location">
                    <img className="location-ic"
                         src={require('../../../icons/ic_location_48px.png')}
                         alt="location icon"/>
                    <span>近くのプランを探す</span>
                </div>
            </div>
        );
    };
}