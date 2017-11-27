import React from 'react';
import { string } from 'prop-types';

const Icon = ({ src, ...props }) => (<img alt="" src={src && `http://openweathermap.org/img/w/${src}.png`} {...props} />);

Icon.propTypes = { src: string.isRequired };

export default Icon;
