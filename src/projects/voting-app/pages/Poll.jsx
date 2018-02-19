import React, { PureComponent } from 'react';
import {
  func,
  bool,
  string,
  object,
} from 'prop-types';
import { connect } from 'react-redux';
import { getPoll } from '../actions';

const mapStateToProps = ({ votingApp: { fetching, poll, error } }) => ({ fetching, poll, error });

const mapDispatchToProps = (dispatch, { match: { params: { poll } } }) => ({
  fetchPoll: () => dispatch(getPoll(poll)),
});

class Poll extends PureComponent {
  // static function to call server-side
  // static fetchData(store) { store.dispatch(getPoll()); }
  componentDidMount() { this.props.fetchPoll(); }
  render() {
    if (this.props.fetching) {
      return (<div>loading...</div>);
    } else if (this.props.error) {
      return (<div>{this.props.error}</div>);
    }
    return (<div className={this.context.classnames('card')}>
      {JSON.stringify(this.props.poll)}
    </div>);
  }
}

Poll.propTypes = {
  fetchPoll: func.isRequired,
  fetching: bool.isRequired,
  error: string.isRequired,
  poll: object.isRequired,
  // match: shape({ params: shape({ poll: string.isRequired }).isRequired }).isRequired,
};

Poll.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
