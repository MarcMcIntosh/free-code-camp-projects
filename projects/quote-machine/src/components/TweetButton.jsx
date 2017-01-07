import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { tweetQuote } from '../actions';
/*
<a
  href={`https://twitter.com/intent/tweet?text=${str}`}
  target="_blank"
  rel="noopener noreferrer"
>Tweet</a>
*/

const TwitterButton = props => (
  <button
    tabIndex="0"
    className={props.classed}
    disabled={!props.disabled}
    onClick={(e) => {
      e.preventDefault();
      const str = `${props.quote} -- ${props.author}`;
      props.onClick(str);
    }}
  >{props.children}</button>
);

/* Use this method in a action */
/* http://stackoverflow.com/questions/34676092/redux-how-to-open-a-new-window-after-ajax-complete */
TwitterButton.propTypes = {
  classed: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  quote: PropTypes.string,
  author: PropTypes.string,
};

TwitterButton.defaultProps = {
  classed: 'qm__tweet',
  children: 'Tweet',
};

const mapStateToProps = state => ({
  disabled: state.done,
  quote: state.quote,
  author: state.author,
});

const mapDispatchToProps = dispatch => ({
  onClick: str => dispatch(tweetQuote(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitterButton);
