import React, { PureComponent } from 'react';
import {
  bool,
  func,
  string,
  shape,
  array,
  // object,
} from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { refresh, deleteQuestion, deleteAccount } from '../actions';

const mapStateToProps = ({
  votingApp: { authenticated, username, questionsAsked, fetching },
}) => ({ authenticated, username, questionsAsked, fetching });

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(refresh()),
  onDeleteQuestion: event => dispatch(deleteQuestion(event.target.value)),
  onDeleteAccount: () => dispatch(deleteAccount()),
});

class UserPage extends PureComponent {
  componentDidMount() { this.props.fetchData(); }
  render() {
    const { links: { login, view, results, create }, classnames } = this.context;
    const { authenticated, username, questionsAsked, fetching, onDeleteQuestion, onDeleteAccount } = this.props;
    if (fetching) {
      return (<div>loading...</div>);
    } else if (!authenticated) {
      return (<Redirect to={login} />);
    }
    return (<div>
      <div className={classnames('card')}>
        <header className={classnames('card__primary')}>
          <h1 className={classnames('card__title')}>Hello {username}</h1>
          <h2 className={classnames('card__subtitle')}>Account and question managment</h2>
        </header>

        <section className={classnames('card__actions', 'card__actions--space-evenly')}>
          <Link to={create} className={classnames('card__action', 'card__action--primary')}>Ask Question</Link>
          <button className={classnames('card__action', 'card__action--accent')} title="Delete account" onClick={onDeleteAccount}>Delete Account</button>
        </section>
      </div>

      {questionsAsked.map(d => (<div key={d._id} className={classnames('card')}>
        <section className={classnames('card__primary')}>
          <h1 className={classnames('question__text')}>{d.question}</h1>
          <h2 className={classnames('question__time')}>
            {new Date(d.created_at).toLocaleDateString()}
          </h2>
        </section>
        <section className={classnames('card__actions', 'card__actions--space-evenly')}>
          <Link to={view + '/' + d._id} className={classnames('card__action')}>View</Link>
          <Link to={results + '/' + d._id} className={classnames('card__action', 'card__action--primary')}>Results</Link>
          <button value={d._id} title="Delete this question" className={classnames('card__action', 'card__action--accent')} onClick={onDeleteQuestion}>Delete</button>
        </section>
      </div>))}

    </div>);
  }
}

UserPage.propTypes = {
  fetching: bool.isRequired,
  authenticated: bool.isRequired,
  username: string.isRequired,
  // user: object.isRequired,
  fetchData: func.isRequired,
  questionsAsked: array.isRequired,
  onDeleteQuestion: func.isRequired,
  onDeleteAccount: func.isRequired,
};

UserPage.contextTypes = {
  links: shape({ login: string.isRequired, view: string.isRequired, results: string.isRequired }).isRequired,
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
