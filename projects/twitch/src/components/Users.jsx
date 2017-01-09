import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestTwitchUserInfo } from '../actions';

class Users extends Component {
  componentDidMount() {
    const fetchedUsers = Object.keys(this.props.channels);
    const usersToGet = this.props.users.filter(d => fetchedUsers.indexOf(d) === -1);
    usersToGet.forEach(user => this.props.fetchUser(user));
  }
  render() {
    return (<div>Hello</div>);
  }
}

Users.propTypes = {
  users: PropTypes.array,
  channels: PropTypes.object,
  fetchUser: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users,
  channels: state.channels,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(requestTwitchUserInfo(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
