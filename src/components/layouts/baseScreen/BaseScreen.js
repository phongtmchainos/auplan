import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "../../../routes";
import Footer from "../footer/Footer";

export default class BaseScreen extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main className="container" ref="something">
                    <div className="content">
                        <Routes {...this.props} />
                    </div>
                    <Footer {...this.props} />
                </main>
            </BrowserRouter>
        )
    }
}
