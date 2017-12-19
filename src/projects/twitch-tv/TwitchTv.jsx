import React, { PureComponent } from 'react';
import { string, array, object, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, toggleDisplay } from './actions';
import UserList from './components/UserList';

const mapStateToProps = ({ twitchTv: { error, users, display, fetching } }) => ({ error, fetching, users, display });

const mapDispatchToProps = dispatch => ({
  fetchUsers: arr => dispatch(fetchUsers(arr)),
  setFilter: str => dispatch(toggleDisplay(str)),
});

class TwitchTv extends PureComponent {
  componentDidMount() {
    this.props.fetchUsers(this.userUrls());
  }
  componentDidUpdate(prevProps) {
    if (!this.props.fetching && !prevProps.fetching) {
      this.props.fetchUsers(this.userUrls());
    }
  }
  userUrls() {
    const host = 'https://wind-bow.glitch.me/twitch-api';
    const channels = this.props.names.map(name => ({ name, url: `${host}/channels/${name}` }));
    const streams = this.props.names.map(name => ({ name, url: `${host}/streams/${name}` }));
    return [].concat(channels, streams);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('twitch-tv')}>
      <section className={classnames('twitch-tv__primary')}>
        <h1 className={classnames('twitch-tv__title')}>Twitch TV Streams</h1>
      </section>
      <nav className={classnames('twitch-tv__tab-bar')}>   {this.props.filters.map(d => (<a
        key={d}
        className={classnames('twitch-tv__tab', this.props.display === d && 'twitch-tv__tab--active')}
        role="presentation"
        value={d}
        onClick={(event) => { event.preventDefault(); return this.props.setFilter(d); }}
      >{d}</a>))}</nav>

      <UserList users={this.props.users} display={this.props.display} />

    </div>);
  }
}

TwitchTv.propTypes = {
  filters: array,
  names: array,
  fetchUsers: func.isRequired,
  users: object.isRequired,
  display: string.isRequired,
  setFilter: func.isRequired,
  // data: array.isRequired,
  fetching: bool.isRequired,
};

TwitchTv.defaultProps = {
  names: ['freecodecamp', 'ESL_SC2', 'OgamingSC2', 'cretetion', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'brunofin', 'comster404'],
  filters: ['all', 'online', 'offline'],
};

TwitchTv.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(TwitchTv);
