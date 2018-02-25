import React, { PureComponent } from 'react';
import { func, bool, string, shape, array, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPoll, setVote } from '../actions';
// import TakePollForm from '../components/Forms/TakePoll';

const mapStateToProps = ({
  votingApp: {
    fetching,
    poll: { _id, question, answers },
    votes,
  },
}) => ({ fetching, _id, question, answers, votes });

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
    this.hasVoted = props._id && Object.prototype.hasOwnProperty.call(props.votes, props._id);
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
    return this.hasVoted && votes[_id] === id;
  }
  render() {
    /* You can pass aditional props to redux form */
    const { fetching, question, answers } = this.props;
    const { classnames } = this.context;

    /* Only vote once */
    return (<div className={classnames('card')}>

      <section className={classnames('card__primary')}>
        <h1 className={classnames('card__title')}>{question}</h1>
      </section>

      <section>{answers.map(({ id, key, value }) => (<div key={id} className={classnames('field')}>

        <div className={classnames('checkbox')}>

          <input disabled={fetching} className={classnames('checkbox__native-control')} type="radio" name={key} value={id} id={value} onChange={this.handleChange} checked={this.isChecked(id)} />

          <div className={classnames('checkbox__background')}>
            <svg className={classnames('checkbox__checkmark')} viewBox="0 0 24 24">
              <path className={classnames('checkbox__checkmark-path')} fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div className={classnames('checkbox__mixedmark')} />
          </div>
        </div>

        <label htmlFor={id}>{value}</label>
      </div>))}</section>
    </div>);
  }
}

Poll.propTypes = {
  fetchPoll: func.isRequired,
  fetching: bool.isRequired,
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
