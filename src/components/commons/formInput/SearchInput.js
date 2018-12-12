import React from "react";

export default class SearchInput extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="col-xs-12">
                    <span className="form-control-start"><img
                                                      src={require('../../../icons/ic_search.png')}
                                                      alt=""/></span>
                    <input type="email" className="form-control search-input" placeholder="イベント" onClick={this.handleSearchInput}/>
                    <span className="form-control-feedback">
                        <img className="delete-ic search-close" src={require('../../../icons/ic_delete.png')} alt=""/>
                    </span>
                </div>
            </div>
        );
    };
}