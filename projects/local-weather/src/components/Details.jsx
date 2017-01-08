import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Details = (props) => {
  const { classed, description } = props;
  return (<div className={classed}>{description}</div>);
};

Details.propTypes = {
  classed: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = state => ({
  description: state.description,
});

export default connect(mapStateToProps)(Details);
