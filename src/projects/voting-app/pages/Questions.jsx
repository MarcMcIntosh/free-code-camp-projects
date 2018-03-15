import React, { PureComponent } from 'react';
import { array, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { getQuestions } from '../actions';
import QuestionsList from '../components/Questions/List';

const mapStateToProps = ({ votingApp: { questions, fetching } }) => ({ questions, fetching });

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getQuestions()),
});

class QuestionsPage extends PureComponent {
  componentDidMount() { this.props.fetchData(); }
  render() {
    const { classnames } = this.context;
    return (<div>
      {this.props.fetching && (<p className={classnames('loader')}>loading</p>)}
      <QuestionsList questions={this.props.questions} />
    </div>);
  }
}

QuestionsPage.propTypes = {
  fetchData: func.isRequired,
  questions: array.isRequired,
  fetching: bool.isRequired,
};

QuestionsPage.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
