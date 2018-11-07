import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div>
            <img className="header-logo" src={require('../../../icons/header-logo.png')} alt="logo"/>
          </div>
        </Link>
        <div className="txtHeaderArea">
          <img src={require('../../../images/シェイプ-131.png')} alt="txtHeader"/>
        </div>
        <div onClick={this.props.openMenu}>
          <img className="menu-icon" src={require('../../../icons/menu1.png')} alt="menuIcon"/>
        </div>
      </div>
    )
  }
}

export default Header;
