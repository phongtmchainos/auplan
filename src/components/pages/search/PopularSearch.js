import React from "react";
import BasePageComponent from "../../commons/BasePageComponent";

export default class PopularSearch extends BasePageComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="cap">
                    <div className="title">人気ワード</div>
                </div>
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
            </div>
        )
    }
}
