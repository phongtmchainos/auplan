import React from "react";
import { slide as SlideMenu } from 'react-burger-menu';
import "./Menu.css";
import {Link} from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false
    }
  }

  openMenu = () => {
    this.setState({isShowMenu: true})
  };

  closeMenu = () => {
    this.setState({isShowMenu: false})
  };

  render() {
    return (
      <SlideMenu right width={'100vw'} isOpen={ this.state.isShowMenu } customBurgerIcon={false}>
        <div className="menu-container">
          <div className="row menu-header">
            <div className="cancel col-xs-3">
              <img className="left-arrow-ic" onClick={ () => this.closeMenu() }
                src={require('../../../icons/arrown.png')} alt="" />
            </div>
            <div className="title col-xs-6">Auplan</div>
          </div>
          <div className="bnt-s">
            <Link to="/login" onClick={() => this.closeMenu()}>
              <button>ログイン</button>
            </Link>
          </div>
          <div className="account">
            <div className="container-fluid">
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">お知らせ
                  <span>
                <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">個人情報編集
                  <span>
                    <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                  </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">売上、振込申請
                  <span>
                    <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="support">
            <div className="container-fluid">
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">ヘルプ <span>
                  <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">お問い合わせ <span>
                  <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="data">
            <div className="container-fluid">
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">Auplanについて
                  <span>
                    <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                  </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">会社情報 <span>
                  <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">利用規約 <span>
                  <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                </span>
                </div>
              </Link>
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">プライバシーポリシー
                  <span>
                    <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="logout">
            <div className="container-fluid">
              <Link to="/notice" onClick={() => this.closeMenu()}>
                <div className="menu">ログアウト
                  <span>
                    <img className="right-arrow-ic" src={require('../../../icons/arrown-right.png')} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </SlideMenu>
    )
  }
}