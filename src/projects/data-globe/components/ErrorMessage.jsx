import React from 'react';
import { string, func } from 'prop-types';

const ErrorMessage = ({
  text,
  onClick,
  ...props
}) => ((!text) ? false : (<div {...props}>
  <h2>Error: {string}</h2>
  <button onClick={onClick}>Retry</button>
</div>));

ErrorMessage.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
};

export default ErrorMessage;
