import React, { PureComponent } from 'react';
import { func, bool, string, shape, array, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPoll, setVote } from '../actions';
// import TakePollForm from '../components/Forms/TakePoll';
import Answer from '../components/Poll/Answer';

const mapStateToProps = ({
  votingApp: {
    authenticated,
    fetching,
    submittingVote,
    poll: { _id, question, answers },
    votes,
  },
}) => ({ submittingVote, fetching, _id, question, answers, votes, authenticated });

const mapDispatchToProps = (dispatch, {
  match: { params: { id } },
}) => ({
  fetchPoll: () => dispatch(getPoll(id)),
  onSetVote: payload => dispatch(setVote(payload)),
});

class Poll extends PureComponent {
  // static function to call server-side
  // static fetchData(store) { store.dispatch(this.props.fetchPoll()); }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  componentDidMount() {
    if (this.props._id !== this.props.match.params.id && !this.props.fetching) {
      this.props.fetchPoll();
    }
  }
  handleChange(event) {
    this.props.onSetVote({ question: event.target.name, answer: event.target.value });
  }
  isChecked(id) {
    const { votes, _id } = this.props;
    return _id && Object.prototype.hasOwnProperty.call(votes, _id) && votes[_id] === id;
  }
  render() {
    /* You can pass aditional props to redux form */
    const {
      // fetching,
      question,
      answers,
      submittingVote,
    } = this.props;
    const { classnames } = this.context;

    /* Only vote once */
    return (<div className={classnames('poll')}>
      {submittingVote && (<div className={classnames('loader')} />)}
      <section className={classnames('poll__primary')}>
        <h1 className={classnames('poll__question')}>{question}</h1>
      </section>

      <section>{answers.map(({
        id,
        key,
        value,
      }) => (<Answer
        key={id}
        checked={this.isChecked(id)}
        name={key}
        value={id}
        label={value}
        onChange={this.handleChange}
        disabled={submittingVote}
      />))}</section>

      <section className={classnames('card__actions', 'card__actions--space-evenly')}>
        <button className={classnames('card__action')}>Results</button>
        {this.props.authenticated && (<button className={classnames('card__action')} disabled={this.props.votes[this.props._id]}>Add answer</button>)}
      </section>
    </div>);
  }
}

Poll.propTypes = {
  fetchPoll: func.isRequired,
  fetching: bool.isRequired,
  authenticated: bool.isRequired,
  submittingVote: bool.isRequired,
  answers: array.isRequired,
  _id: string.isRequired,
  question: string.isRequired,
  votes: object.isRequired,
  onSetVote: func.isRequired,
  match: shape({
    params: shape({ id: string.isRequired }).isRequired,
    url: string.isRequired,
  }).isRequired,
  // match: shape({ params: shape({ poll: string.isRequired }).isRequired }).isRequired,
};

Poll.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
