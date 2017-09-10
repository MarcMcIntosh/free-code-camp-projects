import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  round: state.round,
});

const mapDispatchToProps = () => ({});

const Round = ({
  round,
  className,
}) => (<span className={className} >{round}</span>);

const { string, number } = PropTypes;
Round.propTypes = { className: string, round: number };

export default connect(mapStateToProps, mapDispatchToProps)(Round);
