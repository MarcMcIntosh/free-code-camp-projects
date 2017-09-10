import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { iconHasLoaded } from '../actions';

const Icon = ({
  className,
  icon,
  iconLoaded,
  description,
  isLoading,
  ...props
}) => {
  if (isLoading || !icon) return (<img className={`${className} loading`} role="presentation" />);
  return (<img
    {...props}
    className={iconLoaded ? className : `${className} loading`}
    alt={description}
    src={`http://openweathermap.org/img/w/${icon}.png`}
  />);
};

const { string, func, bool } = PropTypes;
Icon.propTypes = {
  className: string,
  icon: string,
  description: string,
  iconLoaded: bool,
  isLoading: bool,
  onLoad: func,
};

const mapStateToProps = (state) => {
  const { icon, description, iconLoaded } = state;
  return { icon, description, iconLoaded };
};

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(iconHasLoaded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
