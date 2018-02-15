import React, { PureComponent } from 'react';
import { func, string, bool, shape, object } from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

import {
  login,
  register,
  logout,
  refresh,
  // createPoll,
} from './actions';
import classnames from './styles';
import RegisterPage from './pages/Register';
import CreatePoll from './pages/CreatePoll';
import LoginPage from './pages/Login';
import ViewQuestion from './pages/ViewQuestion';
// import HandleRedirect from './components/HandleRedirect';


const mapStateToProps = ({
  session: { token, id, username, authenticated, ...session },
  votingApp: {
    polls,
    fetching,
    // redirectTo,
  },
}) => ({
  token,
  id,
  username,
  fetching: session.fetching || fetching,
  authenticated,
  polls,
  // redirectTo,
});

const mapDispatchToProps = dispatch => ({
  onLogin: values => dispatch(login(values)),
  onRegister: values => dispatch(register(values)),
  onLogout: values => dispatch(logout(values)),
  onRefresh: values => dispatch(refresh(values)),
  // onCreate: values => dispatch(createPoll(values)),
  // redirect: str => dispatch(redirect(str)),
});

class VotingApp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.onCreate = this.onCreate.bind(this);
    const path = this.props.route.path.replace(/\/$/, '');
    this.links = {
      home: path,
      login: path + '/login',
      register: path + '/register',
      create: path + '/create',
      view: path + '/view/:question',
    };
  }
  getChildContext() {
    return {
      classnames: this.classnames,
      links: this.links,
    };
  }
  onCreate(values) {
    return fetch('/api/voting-app/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.token}`,
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) { return res.json(); }
      const error = new Error(res.statusText);
      error.stack = res;
      throw error;
    }).then(json => json).catch((error) => { throw new SubmissionError(error); });
  }
  render() {
    /* if this.props.route doesn't work use the url in portfolio/appData.js */
    return (<div>
      <header className={this.classnames('toolbar')}>
        <div className={this.classnames('toolbar__row')}>
          <section className={this.classnames('toolbar__section', 'toolbar__section--align-start')}>
            <span className={this.classnames('toolbar__title')}>Voting App</span>
          </section>
          <section className={this.classnames('toolbar__section')}>
            {/* add a loader here */}
          </section>
          <section className={this.classnames('toolbar__section', 'toolbar__section--align-end')}>
            <Link to={this.links.login} title="login">Login</Link>
          </section>
        </div>
      </header>

      <Route path={this.links.view} component={ViewQuestion} />

      {/* <Route
        path={this.links.view}
        render={({ match }) => (<ViewQuestion isFetching={this.props.fetching} getQuestion={() => this.props.getQuestion(match.params.question)} />)}
      /> */}

      <Route path={this.links.login} render={() => (<LoginPage redirect={this.links.home} isAuthorised={this.props.authenticated} onSubmit={this.props.onLogin} />)} />

      <Route path={this.links.register} render={() => (<RegisterPage redirect={this.links.home} isAuthorised={this.props.authenticated} onSubmit={this.props.onRegister} />)} />

      <Route
        path={this.links.create}
        render={({ history }) => (<CreatePoll redirect={this.links.login} isAuthorised={this.props.authenticated} onSubmit={this.props.onCreate} onSubmitSuccess={res => history.push(this.links.home + '/view/' + res.id)} />)}
      />
    </div>);
  }
}

VotingApp.propTypes = {
  onLogin: func.isRequired,
  onRegister: func.isRequired,
  onCreate: func.isRequired,
  // fetching: bool.isRequired,
  // onRefresh: func.isRequired,
  // onLogout: func.isRequired,
  token: string.isRequired,
  // id: string.isRequired,
  // fetching: bool.isRequired,
  authenticated: bool.isRequired,
  route: shape({
    path: string.isRequired,
  }).isRequired,
};

VotingApp.childContextTypes = { classnames: func.isRequired, links: object.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(VotingApp);
