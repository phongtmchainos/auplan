import MyCalendarList from '../../components/pages/myCalendarList/MyCalendarList';
import {connect} from 'react-redux';

const mapStateToProps =(state)=>{
    return{

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

    }
};

const MyCalendarListContainer =connect(mapStateToProps, mapDispatchToProps)(MyCalendarList);

export default MyCalendarListContainer;