import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Users from '../components/Users';
import * as UserActions from '../actions/userActions';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
