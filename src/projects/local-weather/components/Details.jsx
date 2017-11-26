import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

const Details = ({
  description,
  className,
}) => (<div className={className}>{description}</div>);

Details.propTypes = {
  description: string.isRequired,
  className: string.isRequired,
};

const mapStateToProps = state => ({
  description: state.description,
});

export default connect(mapStateToProps)(Details);
