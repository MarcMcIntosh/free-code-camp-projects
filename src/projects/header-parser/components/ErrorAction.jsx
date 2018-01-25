import React from 'react';
import { func, string } from 'prop-types';

const ErrorAction = ({ onClick, message }, { classnames }) => (<section className={classnames('card__actions')}>
  {message}
  <button onClick={onClick} className={classnames('card__action')}>Retry</button>
</section>);

ErrorAction.propTypes = { onClick: func.isRequired, message: string };

ErrorAction.defaultProps = { message: 'An error has occured' };

ErrorAction.contextTypes = { classnames: func.isRequired };

export default ErrorAction;
