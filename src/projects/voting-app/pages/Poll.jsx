import React, { PureComponent } from 'react';
import {
  func,
  // bool,
  // string,
  // object,
} from 'prop-types';
import { connect } from 'react-redux';
import { getPoll } from '../actions';

const mapStateToProps = ({ fetching, poll, error }) => ({ fetching, poll, error });

const mapDispatchToProps = (dispatch, { match: { params: { poll } } }) => ({
  fetchPoll: () => dispatch(getPoll(poll)),
});

class Poll extends PureComponent {
  componentDidMount() { this.props.fetchPoll(); }
  render() {
    return (<div className={this.context.classnames('poll')}>View Poll</div>);
  }
}

Poll.propTypes = {
  fetchPoll: func.isRequired,
  // fetching: bool.isRequired,
  // error: string.isRequired,
  // poll: object.isRequired,
  // match: shape({ params: shape({ poll: string.isRequired }).isRequired }).isRequired,
};

Poll.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
