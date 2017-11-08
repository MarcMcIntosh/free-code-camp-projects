import React from 'react';
import { node, func } from 'prop-types';

const ErrorMessage = ({
  children,
  onClick,
  ...props
}, {
  classnames,
}) => (<aside
  className={classnames('bar-chart-error', children && 'bar-chart-error--open')}
  role="alertdialog"
  aria-hidden={!(children)}
  aria-labelledby="Error Message"
  aria-describedby="There has been an error fetching data"
  {...props}
>
  <div className={classnames('bar-chart-error__surface')}>
    <header className={classnames('bar-chart-error__header')}>
      <h2 className={classnames('bar-chart-error__header__title')}>Error fetching data.</h2>
    </header>
    <section className={classnames('bar-chart-error__body')}>{children}</section>
    <footer className={classnames('bar-chart-error__footer')}>
      <button type="button" tabIndex="0" onClick={onClick} title="Click to retry" className={classnames('bar-chart-error__button')}>Retry</button>
    </footer>
  </div>
</aside>);

ErrorMessage.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

ErrorMessage.contextTypes = { classnames: func.isRequired };

export default ErrorMessage;
