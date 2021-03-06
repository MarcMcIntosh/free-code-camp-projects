import React from 'react';
import { node, func } from 'prop-types';

const ErrorMessage = ({
  children,
  onClick,
  ...props
}, {
  classnames,
}) => (<aside
  className={classnames('data-globe-error', children && 'data-globe-error--open')}
  role="alertdialog"
  aria-hidden={!(children)}
  aria-labelledby="Error Message"
  aria-describedby="There has been an error fetching data"
  {...props}
>
  <div className={classnames('data-globe-error__surface')}>
    <header className={classnames('data-globe-error__header')}>
      <h2 className={classnames('data-globe-error__header__title')}>Error fetching data.</h2>
    </header>
    <section className={classnames('data-globe-error__body')}>{children}</section>
    <footer className={classnames('data-globe-error__footer')}>
      <button type="button" tabIndex="0" onClick={onClick} title="Click to retry" className={classnames('data-globe-error__button')}>Retry</button>
    </footer>
  </div>
</aside>);

ErrorMessage.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

ErrorMessage.contextTypes = { classnames: func.isRequired };

export default ErrorMessage;
