import React, { PureComponent } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';

const mapStateToProps = ({ votingApp: { authenticated, fetching } }) => ({ authenticated, fetching });

const mapDispatchToProps = dispatch => ({ onLogout: () => dispatch(logout()) });

class LogOutPage extends PureComponent {
  componentDidMount() { this.props.onLogout(); }
  render() {
    const { classnames, links: { home } } = this.context;
    const { fetching, onLogout, authenticated } = this.props;

    if (!authenticated) { return (<Redirect to={home} />); }

    return (<div className={classnames('card', 'form')}>

      <section className={classnames('card__primary')}>
        <h1 className={classnames('card__title')}>Signing Out</h1>
      </section>

      <section className={classnames('card__actions')}>
        <button disabled={fetching} onClick={onLogout} className={classnames('card__action')}>Retry</button>
      </section>
    </div>);
  }
}

LogOutPage.propTypes = {
  onLogout: func.isRequired,
  authenticated: bool.isRequired,
  fetching: bool.isRequired,
};

LogOutPage.contextTypes = {
  classnames: func.isRequired,
  links: shape({ home: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutPage);
