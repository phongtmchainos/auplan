import React from 'react';
import Header from "../header/Header";
import Menu from "../menu/Menu";

export default class TopScreen extends React.Component {
    render() {
        return (
            <div className="header-menu">
                <Menu ref="menu" />
                <Header openMenu={() => this.refs.menu.openMenu()} />
            </div>
        )
    }
}
