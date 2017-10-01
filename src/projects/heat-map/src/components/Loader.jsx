import React from 'react';
import { bool } from 'prop-types';

const Loader = ({ loading, ...props }) => (<div {...props}>Loading</div>);

Loader.propTypes = { loading: bool.isRequired };

export default Loader;
