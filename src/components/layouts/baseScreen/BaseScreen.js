import React from 'react';
import Header from "../header/Header";
import {BrowserRouter} from "react-router-dom";
import Routes from "../../../routes";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";

export default class BaseScreen extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main className="container">
            <Menu ref="menu"/>
            <Header openMenu={() => this.refs.menu.openMenu() }/>
            <div className="content">
              <Routes />
            </div>
            <Footer />
          </main>
        </BrowserRouter>
      </div>
    )
  }
}
