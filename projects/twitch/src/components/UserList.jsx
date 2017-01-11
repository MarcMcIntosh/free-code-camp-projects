import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import UserError from './UserError';
import User from './User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.applyFilter = this.applyFilter.bind(this);
  }

  componentWillMount() {
    this.props.getUsers(this.props.USER_NAMES);
  }
  applyFilter(arr) {
    const { display } = this.props;
    return arr.sort((a, b) => {
      if (a.streaming && !b.streaming) {
        return -1;
      } else if (a.streaming && b.streaming) {
        return (a.name > b.name) ? -1 : 0;
      } else if (a.error && !b.error) {
        return 1;
      } else if (a.error && b.error) {
        return (a.name > b.name) ? 0 : 1;
      }
      return 0;
    }).filter((d) => {
      if (display === 'online' && !d.streaming) {
        return false;
      } else if (display === 'offline' && d.streaming) {
        return false;
      }
      return true;
    });
  }
  render() {
    const { users, ...rest } = this.props;
    delete rest.getUsers;
    delete rest.display;
    delete rest.USER_NAMES;
    const list = [].concat(users);
    return (<div {...rest}>{
      this.applyFilter([].concat(list)).map((user) => {
        const { logo, name, game, error, streaming, message, status, url } = user;
        if (error) {
          return (<UserError
            key={name} name={name} className="error" logo={logo} message={message}
          />);
        }
        return (<User
          key={name} name={user.display_name}
          logo={logo}
          className={(streaming) ? 'online' : 'offline'}
          game={game}
          url={url}
          status={status}
        />);
      })
    }</div>);
  }
}

UserList.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
  children: PropTypes.node,
  display: PropTypes.string,
  USER_NAMES: PropTypes.array,
};

const mapStateToProps = state => ({
  users: state.users,
  display: state.display,
  USER_NAMES: state.USER_NAMES,
});

const mapDispatchToProps = dispatch => ({
  getUsers: users => dispatch(getUserData(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
export {
  UserError,
  User as UserOnline,
  User as UserOffLine,
};
