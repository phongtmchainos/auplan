import Home from '../../components/pages/home/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopImages() {
      dispatch({type: 'FETCH_TOP_IMAGE'})
    }
  }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
