import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { tweetQuote } from '../actions';
import Button from './Button';

/*
<a
  href={`https://twitter.com/intent/tweet?text=${str}`}
  target="_blank"
  rel="noopener noreferrer"
>Tweet</a>
*/

const TwitterButton = ({
  quote,
  children,
  author,
  ...props
}) => (<Button {...props} value={`${quote} -- ${author}`} >{children}</Button>);

/* Use this method in a action */
/* http://stackoverflow.com/questions/34676092/redux-how-to-open-a-new-window-after-ajax-complete */
TwitterButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  quote: PropTypes.string,
  author: PropTypes.string,
};

TwitterButton.defaultProps = {
  children: 'Tweet',
};

const mapStateToProps = state => ({
  disabled: !state.done,
  quote: state.quote,
  author: state.author,
});

const mapDispatchToProps = dispatch => ({
  onClick: event => dispatch(tweetQuote(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitterButton);
