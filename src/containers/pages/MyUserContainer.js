import MyUser from '../../components/pages/myuser/MyUser';
import {connect} from 'react-redux';

const mapStateToProps =(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

    }
};

const MyUserContainer =connect(mapStateToProps, mapDispatchToProps)(MyUser);

export default MyUserContainer;