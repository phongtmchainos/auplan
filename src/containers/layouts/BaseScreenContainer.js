import BaseScreen from '../../components/layouts/baseScreen/BaseScreen';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        activeModal: state.screenStatusReducers.activeModal,
        paramsModal: state.screenStatusReducers.paramsModal,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal(modalName, paramsModal = {}) {
            dispatch({type: 'TOGGLE_MODAL', modalName: modalName, paramsModal: paramsModal});
        }
    }
};

const BaseScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BaseScreen);

export default BaseScreenContainer;
