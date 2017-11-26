import React from 'react';
import { node, func } from 'prop-types';

const ErrorMessage = ({
  children,
  onClick,
  ...props
}, {
  classnames,
}) => (<aside
  className={classnames('leader-board-error', children && 'leader-board-error--open')}
  role="alertdialog"
  aria-hidden={!(children)}
  aria-labelledby="Error Message"
  aria-describedby="There has been an error fetching data"
  {...props}
>
  <div className={classnames('leader-board-error__surface')}>
    <header className={classnames('leader-board-error__header')}>
      <h2 className={classnames('leader-board-error__header__title')}>Error fetching data.</h2>
    </header>
    <section className={classnames('leader-board-error__body')}>
      {children}
    </section>
    <footer className={classnames('leader-board-error__footer')}>
      <button type="button" tabIndex="0" onClick={onClick} title="Click to retry" className={classnames('leader-board-error__button')}>Retry</button>
    </footer>
  </div>
</aside>);

ErrorMessage.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

ErrorMessage.contextTypes = { classnames: func.isRequired };

export default ErrorMessage;
