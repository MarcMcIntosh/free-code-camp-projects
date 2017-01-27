import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  children: state.round,
});

const Round = ({ children }) => React.Children.only(children);

Round.propTypes = { children: PropTypes.node };

export default connect(mapStateToProps)(Round);
