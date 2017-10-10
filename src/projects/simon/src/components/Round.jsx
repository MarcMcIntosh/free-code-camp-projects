import React from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  round: state.round,
});

const mapDispatchToProps = () => ({});

const Round = ({ round, ...props }) => (<span className="simon__round" {...props} >{round}</span>);

Round.propTypes = { round: number.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Round);
