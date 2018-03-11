import React, { PureComponent } from 'react';
import { func, string, bool, shape, object } from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { logout } from '../../common/actions/session';
import { refresh, toggleMenu } from './actions';
import classnames from './styles';
import RegisterPage from './pages/Register';
import CreatePoll from './pages/CreatePoll';
import LoginPage from './pages/Login';
import PollPage from './pages/Poll';
import QuestionsPage from './pages/Questions';
import LogoutPage from './pages/Logout';
import ResultsPage from './pages/Results';
import TopNav from './components/TopNav';
// import HandleRedirect from './components/HandleRedirect';


const mapStateToProps = ({ votingApp: { fetching, user, authenticated, menuIsOpen },
}) => ({ fetching, authenticated, user, menuIsOpen });

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(refresh()),
  onToggleMenu: () => dispatch(toggleMenu()),
});

class VotingApp extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    const path = this.props.route.path.replace(/\/$/, '');
    this.links = {
      home: path,
      login: path + '/login',
      logout: path + '/logout',
      register: path + '/register',
      create: path + '/create',
      view: path + '/view',
      user: path,
      results: path + '/results',
      // poll: '/question',
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
      <TopNav onToggleMenu={this.props.onToggleMenu} authenticated={this.props.authenticated} menuIsOpen={this.props.menuIsOpen} />

      <Route exact path={this.links.home} component={QuestionsPage} />

      <Route path={this.links.view + '/:id'} component={PollPage} />

      <Route path={this.links.login} component={LoginPage} />

      <Route path={this.links.logout} component={LogoutPage} />

      <Route path={this.links.register} component={RegisterPage} />

      <Route path={this.links.create} component={CreatePoll} />

      <Route path={this.links.results + '/:id'} component={ResultsPage} />

    </div>);
  }
}

VotingApp.propTypes = {
  // fetching: bool.isRequired,
  // onRefresh: func.isRequired,
  fetchUser: func.isRequired,
  menuIsOpen: bool.isRequired,
  onToggleMenu: func.isRequired,
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
