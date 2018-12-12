import React from "react";
import BasePageComponent from "../../commons/BasePageComponent";

export default class HistorySearch extends BasePageComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="history">
                <div className="history_items">
                    <img src={require('../../../icons/ic_search.png')} alt=""/>
                    DeNA
                </div>
                <div className="history_items">
                    <img src={require('../../../icons/ic_search.png')} alt=""/>
                    DeNA
                </div>
                <div className="history_items">
                    <img src={require('../../../icons/ic_search.png')} alt=""/>
                    DeNA
                </div>
                <div className="history_items">
                    <img src={require('../../../icons/ic_search.png')} alt=""/>
                    DeNA
                </div>
                <div className="history_items">
                    <img src={require('../../../icons/ic_search.png')} alt=""/>
                    DeNA
                </div>
            </div>
        )
    }
}
