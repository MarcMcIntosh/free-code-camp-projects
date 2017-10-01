import React from 'react';
import { func, bool } from 'prop-types';

const ErrorMessage = ({ err, onClick, ...props }) => ((err) ? (<div {...props}>
  <h4>There was an error</h4>
  <button onClick={onClick} type="button" tabIndex="0">Retry</button>
</div>) : false);

ErrorMessage.propTypes = {
  onClick: func.isRequired,
  err: bool.isRequired,
};

export default ErrorMessage;
