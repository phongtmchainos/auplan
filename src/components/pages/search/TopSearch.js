import React from "react";
import "./Search.css";
import FromDate from "../../commons/formInput/FromDate";
import SearchInput from "../../commons/formInput/SearchInput";
import BasePageComponent from "../../commons/BasePageComponent";
import HistorySearch from "./HistorySearch";
import PopularSearch from "./PopularSearch";

export default class TopSearch extends BasePageComponent {
    constructor(props) {
        super(props);

        this.state = {
            isCloseHistory: true
        }
    }

    _isShowHistory = () => {
        return (
            <div>
                <div className="cap">
                    <div className="title">検索履歴</div>
                    <img onClick={() => this.setState({isCloseHistory: !this.state.isCloseHistory})}
                         src={require('../../../icons/close.png')} alt=""/>
                </div>
                <HistorySearch {...this.props} />
            </div>
        );
    };

    render() {
        return (
            <div id="search-page" className="search-top">
                <div className={"search"}>
                    <div className="container-fluid">
                        <form className="form-horizontal">
                            <SearchInput/>
                        </form>
                    </div>
                </div>
                <div className="from-to">
                    <div className="container-fluid">
                        <form className="form-horizontal">
                            <FromDate/>
                        </form>
                    </div>
                </div>
                <div className="search_top">
                    { this.state.isCloseHistory ? this._isShowHistory() : null }
                    <PopularSearch {...this.props} />
                </div>

            </div>
        )
    }
}
