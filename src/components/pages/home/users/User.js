import Carousel from "nuka-carousel";
import React from "react";
import RecUserList from '../../recommended/recUserList/RecUserList';
import { Link } from 'react-router-dom';
import "./User.css";

export default class User extends React.Component {
  render() {
    return (
      <div className="rec-user">
        <div className="cap-rec-user">
          <div>ユーザー</div>
          <div className="loadMore" onClick={() => this.refs.recUserList.toggleModal()}>
            <span>もっと見る</span>
            <img className="arrow-right-ic" src={require('../../../../icons/more-のコピー.png')} alt="more icon" />
          </div>
        </div>
        <Carousel
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          wrapAround={false}
          slideWidth={0.35}
          speed={500}
        >
          {this.props.user && this.props.user.map(user => (
            <div key={user.id} className="card-user">
              <Link to={`my-user?id=${user.id}`}>
                <div>
                  <img className="user-avatar" src={user.profile_image} alt="" />
                </div>
                <div className="name">
                  {user.display_name}
              </div>
                <div className="nick-name">
                  {user.isOfficial && 
                    <img className="ic_office" src={require('../../../../icons/official.png')} alt="" />
                  }
                  {user.account_id}
              </div>
              </Link>
            </div>
          ))}
        </Carousel>
        <RecUserList ref={'recUserList'} />
      </div>
    )
  }
}
