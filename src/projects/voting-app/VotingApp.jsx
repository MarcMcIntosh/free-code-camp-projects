import React, { PureComponent } from 'react';
import { func, string, bool, shape } from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
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
  }
  getChildContext() { return { classnames: this.classnames }; }
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
    const path = this.props.route.path.replace(/\/$/, '');
    return (<div>

      <Route path={path + '/login'} render={() => (<LoginPage redirect={path} isAuthorised={this.props.authenticated} onSubmit={this.props.onLogin} />)} />

      <Route path={path + '/register'} render={() => (<RegisterPage redirect={path} isAuthorised={this.props.authenticated} onSubmit={this.props.onRegister} />)} />

      <Route
        path={path + '/create'}
        render={({ history }) => (<CreatePoll redirect={path} isAuthorised={this.props.authenticated} onSubmit={this.props.onCreate} onSubmitSuccess={res => history.push(path + '/view/' + res.id)} />)}
      />
    </div>);
  }
}

VotingApp.propTypes = {
  onLogin: func.isRequired,
  onRegister: func.isRequired,
  onCreate: func.isRequired,
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

VotingApp.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(VotingApp);
