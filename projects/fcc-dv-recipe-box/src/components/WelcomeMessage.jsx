/* eslint max-len: off */
import React from 'react';

const WelcomeMessage = props => (<article {...props}>
  <header>
    <h1>Weclome</h1>
  </header>
  <p>This appliction stores your recipes in your browsers storage, these will be deleted along with any cookies.</p>
  <footer>To add and view recipes click the <i className="material-icons">menu</i> button to diplay a side menu</footer>
</article>);

WelcomeMessage.defaultProps = {
  className: 'content',
};

export default WelcomeMessage;
