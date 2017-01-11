import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Container extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.users);
  }
  render() {
    const { users, channels, getUsers, children, ...rest } = this.props;
    return (<div {...rest}>{children}</div>);
  }
}

Container.propTypes = {
  users: PropTypes.array,
  channels: PropTypes.object,
  children: PropTypes.node,
  getUsers: PropTypes.func,
};

const mapStateToProps = state => ({
  users: state.users,
  channels: state.channels,
});

const mapDispatchToProps = dispatch => ({
  getUsers: users => dispatch(fetchUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
