import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from '../styles/cookies';
import acceptCookies from '../actions';

const mapStateToProps = ({ app: { cookiesAccepted } }) => ({
  cookiesAccepted,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(acceptCookies()),
});


const CookieMessage = ({
  cookiesAccepted,
  onClick,
}) => !cookiesAccepted && (<footer className={classnames('cookie-message', cookiesAccepted && 'cookie-message--accepted')}>
  This website uses cookies to give you the best possible experience.
  <Link tabIndex="0" to="about">Learn more</Link>
  <button tabIndex="0" onClick={onClick} className={classnames('cookie-message', 'cookie-message__button')}>Got it.</button>
</footer>);

CookieMessage.propTypes = {
  cookiesAccepted: bool.isRequired,
  onClick: func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CookieMessage);
