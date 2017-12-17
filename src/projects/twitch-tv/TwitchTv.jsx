import React, { PureComponent } from 'react';
import { string, array, object, func } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, toggleDisplay } from './actions';
import User from './components/User';

const mapStateToProps = ({
  twitchTv: { ...state },
}) => ({
  error: state.error,
  users: state.users,
  display: state.display,
  filters: ['all', 'online', 'offline'],
  data: Object.keys(state.users).map(d => state.users[d]).sort((a, b) => {
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
    if (state.display === 'online' && !d.streaming) {
      return false;
    } else if (state.display === 'offline' && d.streaming) {
      return false;
    }
    return true;
  }),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadUsers: () => dispatch(fetchUsers(ownProps.names)),
  setFilter: event => dispatch(toggleDisplay(event.target.value)),
});

class TwitchTv extends PureComponent {
  componentDidMount() { this.props.onLoadUsers(); }
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

          <section className="twitch-tv__users">
            {this.props.data.map(d => (<User {...d} />))}
          </section>
        </div>
      </div>
    </div>);
  }
}

TwitchTv.propTypes = {
  onLoadUsers: func.isRequired,
  names: array,
  users: object.isRequired,
  filters: array.isRequired,
  display: string.isRequired,
  setFilter: func.isRequired,
  data: array.isRequired,
};

TwitchTv.defaultProps = {
  names: ['freecodecamp', 'ESL_SC2', 'OgamingSC2', 'cretetion', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'brunofin', 'comster404'],
};

export default connect(mapStateToProps, mapDispatchToProps)(TwitchTv);
