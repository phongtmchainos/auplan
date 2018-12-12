import React from 'react';
import {withRouter} from "react-router";
import * as dom from "react-dom";
import { createBrowserHistory } from 'history';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        const childNode = dom.findDOMNode(this).children[0];
        // Here I call whatever I want when the child is loaded
        // @NOTE: There's no refs implied.
        window.scrollTo(0, 0);
        childNode.animate(function () {
             console.log(11122)
        })
        console.log(createBrowserHistory.scrollRestoration)

        if (!('scrollRestoration' in createBrowserHistory)) {
            return;
        }
        createBrowserHistory.scrollRestoration = 'manual';
        console.log(createBrowserHistory)
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);