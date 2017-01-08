import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Icon = (props) => {
  const { icon, description } = props;
  return (!icon) ? (<span > Fetching icon</span>) : (<img
    alt={description} src={`http://openweathermap.org/img/w/${icon}.png`}
  />);
};

Icon.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { icon, description } = state;
  return { icon, description };
};

export default connect(mapStateToProps)(Icon);
