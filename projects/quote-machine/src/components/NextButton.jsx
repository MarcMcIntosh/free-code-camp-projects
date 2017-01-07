import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

const NextButton = props => (
  <button
    tabIndex="0"
    className={props.classed}
    disabled={!props.disabled}
    onClick={(e) => {
      e.preventDefault();
      props.onClick();
    }}
  >{props.children}</button>
);

NextButton.propTypes = {
  classed: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

NextButton.defaultProps = {
  children: 'Next',
  classed: 'qm__next',
};

const mapStateToProps = state => ({
  disabled: state.done,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
