import React from 'react';
import { bool } from 'prop-types';

const Loader = ({ loading, ...props }) => ((loading) ? (<div {...props}>Loading</div>) : loading);

Loader.propTypes = { loading: bool.isRequired };

export default Loader;
