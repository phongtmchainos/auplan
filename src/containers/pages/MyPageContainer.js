import MyPage from '../../components/pages/mypage/Mypage';
import {connect} from 'react-redux';

const mapStateToProps =(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

    }
};

const MyPageContainer =connect(mapStateToProps, mapDispatchToProps)(MyPage);

export default MyPageContainer;