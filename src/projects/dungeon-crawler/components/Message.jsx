import React from 'react';
import { node, func } from 'prop-types';

const Message = ({ children, onClick, ...props }, { classnames }) => (<aside
  className={classnames('dungeon-message', children && 'dungeon-message--open')}
  role="alertdialog"
  aria-hidden={!(children)}
  aria-labelledby="Message"
  aria-describedby="In game Message"
  {...props}
>
  <div className={classnames('dungeon-message__surface')}>
    <header className={classnames('dungeon-message__header')}>
      <h2 className={classnames('dungeon-message__header__title')}>Game Over</h2>
    </header>
    <section className={classnames('dungeon-message__body')}>{children}</section>
    <footer className={classnames('dungeon-message__footer')}>
      <button type="button" tabIndex="0" onClick={onClick} title="Click to retry" className={classnames('dungeon-message__button')}>Replay</button>
    </footer>
  </div>
</aside>);

Message.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

Message.contextTypes = { classnames: func.isRequired };

export default Message;
