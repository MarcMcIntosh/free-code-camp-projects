import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  round: state.round,
});

const mapDispatchToProps = () => ({});

const Round = ({ round, ...props }) => (<span {...props}>{round}</span>);

Round.propTypes = { round: PropTypes.number };

export default connect(mapStateToProps, mapDispatchToProps)(Round);
