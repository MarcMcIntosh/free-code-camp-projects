import React, { PureComponent } from 'react';
import { func, string, bool, shape, object } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
// import { logout } from '../../common/actions/session';
import { requestUser, logout } from './actions';
import classnames from './styles';
import RegisterPage from './pages/Register';
import CreatePoll from './pages/CreatePoll';
import LoginPage from './pages/Login';
import PollPage from './pages/Poll';
// import HandleRedirect from './components/HandleRedirect';


const mapStateToProps = ({ votingApp: { fetching, user, authenticated },
}) => ({ fetching, authenticated, user });

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
  fetchUser: () => dispatch(requestUser()),
});

class VotingApp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    const path = this.props.route.path.replace(/\/$/, '');
    this.links = {
      home: path,
      login: path + '/login',
      register: path + '/register',
      create: path + '/create',
      view: path + '/view',
      user: path,
    };
  }
  getChildContext() {
    return {
      classnames: this.classnames,
      links: this.links,
    };
  }
  componentDidMount() {
    if (!this.props.authenticated) { this.props.fetchUser(); }
  }
  render() {
    /* if this.props.route doesn't work use the url in portfolio/appData.js */
    return (<div>
      <header className={this.classnames('toolbar')}>
        <div className={this.classnames('toolbar__row')}>
          <section className={this.classnames('toolbar__section', 'toolbar__section--align-start')}>
            <Link to={this.links.home} className={this.classnames('toolbar__title')}>Voting App</Link>
          </section>
          <section className={this.classnames('toolbar__section')}>
            {/* add a loader here */}
          </section>
          <section className={this.classnames('toolbar__section', 'toolbar__section--align-end')}>
            {this.props.authenticated ? (<button title="log out" className={classnames('button')} onClick={this.props.onLogout}>Logout</button>) : (<Link to={this.links.login} title="login">Login</Link>)}
          </section>
        </div>
      </header>

      <Route path={this.links.view + '/:poll'} component={PollPage} />

      <Route path={this.links.login} component={LoginPage} />

      <Route path={this.links.register} component={RegisterPage} />

      <Route path={this.links.create} component={CreatePoll} />

    </div>);
  }
}

VotingApp.propTypes = {
  // fetching: bool.isRequired,
  // onRefresh: func.isRequired,
  onLogout: func.isRequired,
  fetchUser: func.isRequired,
  // id: string.isRequired,
  // fetching: bool.isRequired,
  // user: object.isRequired,
  authenticated: bool.isRequired,
  route: shape({
    path: string.isRequired,
  }).isRequired,
};

VotingApp.childContextTypes = { classnames: func.isRequired, links: object.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(VotingApp);
