import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';

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
        const { logo, name, game, error, message, status, url } = user;
        return (<div key={name} className={classnames.item}>
          <section className={classnames.main}>
            <section className={classnames.header}>
              <h1 className={classnames.name}>{name}</h1>
              <h2 className={classnames.game}>{game || error || 'Off-line'}</h2>
            </section>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={logo} role="presentation" className={classnames.image} />
            </a>
          </section>

          <section className={classnames.status}>
            {status || message}
          </section>
        </div>);
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
    image: string,
    item: string,
    game: string,
    header: string,
    name: string,
    status: string,
    main: string,
  }),
};

UserList.defaultProps = { classnames: {
  image: '',
  item: '',
  game: '',
  header: '',
  name: '',
  status: '',
  main: '',
} };

const mapStateToProps = state => ({
  users: state.users,
  display: state.display,
  USER_NAMES: state.USER_NAMES,
});

const mapDispatchToProps = dispatch => ({
  getUsers: users => dispatch(getUserData(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
