import React, { PureComponent } from 'react';
import {
  bool,
  func,
  string,
  shape,
  // object,
} from 'prop-types';
import { connect } from 'react-redux';
import { requestUser } from '../actions';

const mapStateToProps = ({ authenticated, user }) => ({ authenticated, user });

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(requestUser()),
});

class UserPage extends PureComponent {
  componentDidMount() {
    /* stuff */
    const { authenticated, history, fetchUser } = this.props;
    const { links: { login } } = this.context;

    if (!authenticated) { history.push(login); } else { fetchUser(); }
  }
  render() {
    return (<div>More stuff</div>);
  }
}

UserPage.propTypes = {
  authenticated: bool.isRequired,
  history: shape({ push: func.isRequired }).isRequired,
  // user: object.isRequired,
  fetchUser: func.isRequired,
};

UserPage.contextTypes = {
  links: shape({ login: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
