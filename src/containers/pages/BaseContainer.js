import {connect} from 'react-redux';

const BaseContainer = (...properties) => connect(properties[0], properties[1])(properties[2]);
export default BaseContainer;