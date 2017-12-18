import React, { PureComponent } from 'react';
import { string, array, object, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, toggleDisplay } from './actions';
// import User from './components/User';
import UserList from './components/UserList';

const mapStateToProps = ({ twitchTv: { error, users, display, fetching } }) => ({ error, fetching, users, display });

const mapDispatchToProps = dispatch => ({
  fetchUsers: arr => dispatch(fetchUsers(arr)),
  setFilter: event => dispatch(toggleDisplay(event.target.value)),
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
    return (<div className="twitch-tv">
      <div className="mdc-card">
        <div className="mdc-card__horizontal-block">
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title mdc-card__title--large">Twitch TV Streams</h1>
          </section>

          {/* header */}
          <section className="mdc-card__actions mdc-card__actions--vertical">{this.props.filters.map(f => (<button
            className="mdc-button mdc-button--raised mdc-button--compact twitch-tv__button"
            key={f}
            value={f}
            disabled={(this.props.display === f)}
            onClick={this.props.setFilter}
            title={`Set Filter to ${f}`}
          >{f}</button>))}</section>

          <UserList users={this.props.users} display={this.props.display} />

        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TwitchTv);
