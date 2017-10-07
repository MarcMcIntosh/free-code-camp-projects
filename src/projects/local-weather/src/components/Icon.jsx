import React from 'react';
import { string, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { iconHasLoaded } from '../actions';

const mapStateToProps = (state) => {
  const { icon, description, iconLoaded } = state;
  return { icon, description, iconLoaded };
};

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(iconHasLoaded()),
});

const Icon = ({
  className,
  icon,
  iconLoaded,
  description,
  isLoading,
  ...props
}) => {
  if (isLoading || !icon) return (<img alt={icon} className={`${className} loading`} role="presentation" />);
  return (<img
    {...props}
    className={iconLoaded ? className : `${className} loading`}
    alt={description}
    src={`http://openweathermap.org/img/w/${icon}.png`}
  />);
};

Icon.propTypes = {
  className: string.isRequired,
  icon: string.isRequired,
  description: string.isRequired,
  iconLoaded: bool.isRequired,
  isLoading: bool.isRequired,
  onLoad: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
