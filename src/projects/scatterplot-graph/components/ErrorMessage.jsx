import React from 'react';
import { func, node } from 'prop-types';

const ErrorMessage = ({
  err,
  onClick,
  ...props
}) => ((err) ? (<div {...props}>
  <h4>There Has Been an Error</h4>
  <button type="button" tabIndex="0" onClick={onClick}>Retry</button>
</div>) : false);

ErrorMessage.propTypes = {
  err: node.isRequired,
  onClick: func.isRequired,
};

export default ErrorMessage;
