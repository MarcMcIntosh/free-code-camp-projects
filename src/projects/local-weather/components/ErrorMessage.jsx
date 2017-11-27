import React from 'react';
import { node, func } from 'prop-types';

const ErrorMessage = ({
  children,
  onClick,
  ...props
}, {
  classnames,
}) => (<aside
  className={classnames('local-weather-error', children && 'local-weather-error--open')}
  role="alertdialog"
  aria-hidden={!(children)}
  aria-labelledby="Error Message"
  aria-describedby="There has been an error fetching data"
  {...props}
>
  <div className={classnames('local-weather-error__surface')}>
    <header className={classnames('local-weather-error__header')}>
      <h2 className={classnames('local-weather-error__header__title')}>Error fetching data.</h2>
    </header>
    <section className={classnames('local-weather-error__body')}>
      {children}
    </section>
    <footer className={classnames('local-weather-error__footer')}>
      <button type="button" tabIndex="0" onClick={onClick} title="Click to retry" className={classnames('local-weather-error__button')}>Retry</button>
    </footer>
  </div>
</aside>);

ErrorMessage.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

ErrorMessage.contextTypes = { classnames: func.isRequired };

export default ErrorMessage;
