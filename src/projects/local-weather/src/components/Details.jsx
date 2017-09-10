import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Details = ({
  description,
  className,
}) => (<div className={className}>{description}</div>);

Details.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  description: state.description,
});

export default connect(mapStateToProps)(Details);
