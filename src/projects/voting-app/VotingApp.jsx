import React, { PureComponent } from 'react';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { login, register, logout, refresh } from './actions';
import classnames from './styles';
import RegisterPage from './pages/Register';

const mapStateToProps = ({
  session: { token, id, username, authorised, ...session },
  votingApp: { polls, fetching },
}) => ({
  token,
  id,
  username,
  fetching: session.fetching || fetching,
  authorised,
  polls,
});

const mapDispatchToProps = dispatch => ({
  onLogin: values => dispatch(login(values)),
  onRegister: values => dispatch(register(values)),
  onLogout: values => dispatch(logout(values)),
  onRefresh: values => dispatch(refresh(values)),
});

class VotingApp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  render() {
    /* if this.props.route doesn't work use the url in portfolio/appData.js */
    return (<div className={classnames('app')}>
      <h1>Voting app</h1>

      <Route path={this.props.route.replce(/\/$/, '/register')} render={() => (<RegisterPage redirect={this.props.route} isAuthorised={this.props.authorised} onSubmit={this.props.onRegister} />)} />

    </div>);
  }
}

VotingApp.propTypes = {
  // onLogin: func.isRequired,
  onRegister: func.isRequired,
  // onRefresh: func.isRequired,
  // onLogout: func.isRequired,
  // token: string.isRequired,
  // id: string.isRequired,
  // fetching: bool.isRequired,
  authorised: bool.isRequired,
  route: string.isRequired,
};

VotingApp.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(VotingApp);
