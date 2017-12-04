import React from 'react';
import { bool } from 'prop-types';

const Loader = ({ isLoading, ...props }) => ((isLoading) ? (<div {...props}>Loading</div>) : false);

Loader.propTypes = { isLoading: bool.isRequired };

export default Loader;
