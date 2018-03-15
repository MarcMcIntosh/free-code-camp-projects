import React, { PureComponent } from 'react';
import { func, bool, string, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPoll, removePoll, appendAnswer } from '../actions';
import AddAnswerForm from '../components/Forms/AddAnswer';

const mapStateToProps = ({
  votingApp: { authenticated, fetching, poll: { _id, question, answers } },
}) => ({ fetching, _id, question, answers, authenticated });

const mapDispatchToProps = (dispatch, {
  match: { params: { id } },
}) => ({
  fetchData: () => dispatch(getPoll(id)),
  removeData: () => dispatch(removePoll()),
  onSubmit: values => dispatch(appendAnswer({ ...values, question: id })),
});

class AddAnswerPage extends PureComponent {
  componentDidMount() { this.props.fetchData(); }
  componentWillUnmount() { this.props.removeData(); }
  render() {
    const { authenticated, _id, question, history } = this.props;
    const { links: { view } } = this.context;
    const viewAddress = view + '/' + _id;

    return !authenticated ? (<Redirect to={viewAddress} />) : (<AddAnswerForm
      onSubmit={this.props.onSubmit}
      question={question}
      href={viewAddress}
      onSubmitSuccess={() => history.push(viewAddress)}
    />);
  }
}

AddAnswerPage.propTypes = {
  onSubmit: func.isRequired,
  fetchData: func.isRequired,
  removeData: func.isRequired,
  question: string.isRequired,
  authenticated: bool.isRequired,
  _id: string.isRequired,
  history: shape({ push: func.isRequired }).isRequired,
};

AddAnswerPage.contextTypes = {
  links: shape({ view: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAnswerPage);
