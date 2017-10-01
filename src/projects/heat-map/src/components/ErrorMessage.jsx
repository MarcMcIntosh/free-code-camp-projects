import React from 'react';
import { bool, func } from 'prop-types';

const ErrorMessage = ({ err, onClick, ...props }) => ((err) ? (<div {...props}><h4>There has been an error</h4><button onClick={onClick} type="button" tabIndex="0">Retry</button></div>) : false);

ErrorMessage.propTypes = { err: bool.isRequired, onClick: func.isRequired };

export default ErrorMessage;
