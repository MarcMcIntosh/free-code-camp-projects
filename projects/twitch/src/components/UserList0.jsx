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
    const { users, className, classnames } = this.props;
    const list = [].concat(users);
    return (<div className={className}>{
      this.applyFilter([].concat(list)).map((user) => {
        const { logo, name, game, error, streaming, message, status, url } = user;
        return (<div className={classnames.item}>{(
          error
        ) ? (
          <UserError
            key={name} name={name}
            className={classnames.error}
            logo={logo} message={message}
          />
        ) : (
          <User
            key={name} name={user.display_name}
            logo={logo}
            className={(streaming) ? (classnames.online) : (classnames.offline)}
            game={game} url={url} status={status}
          />
       )}</div>);
      })
    }</div>);
  }
}

const { array, func, string, shape } = PropTypes;
UserList.propTypes = {
  users: array,
  getUsers: func,
  display: string,
  USER_NAMES: array,
  className: string,
  classnames: shape({
    error: string,
    online: string,
    offline: string,
    image: string,
    imageTitle: string,
    item: string,
  }),
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
