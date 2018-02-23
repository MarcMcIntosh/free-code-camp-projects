import React, { PureComponent } from 'react';
import { func, string, shape, bool } from 'prop-types';
import { Link } from 'react-router-dom';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClickOutSide = this.handleClickOutSide.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  componentDidMount() { document.addEventListener('mousedown', this.handleClickOutSide); }

  componentWillUnmount() { document.removeEventListener('mousedown', this.handleClickOutSide); }

  setRef(node) { this.node = node; }

  handleClickOutSide(event) {
    if (this.props.menuIsOpen && this.node && !this.node.contains(event.target)) {
      this.props.onToggleMenu();
    }
  }
  render() {
    const { classnames, links: { login, logout, home } } = this.context;
    const { menuIsOpen, onToggleMenu, authenticated } = this.props;

    const msg = authenticated ? 'Sign-out' : 'Sign-in';

    return (<header className={classnames('toolbar')}>
      <div className={classnames('toolbar__row')}>

        <section className={classnames('toolbar__section', 'toolbar__section--align-start')}>

          <div className={classnames('menu__anchor')} ref={this.setRef}>

            <button tabIndex="0" className={classnames('material-icons', 'toolbar__menu-icon')} onClick={onToggleMenu}>menu</button>

            <div tabIndex="-1" className={classnames('menu', menuIsOpen && 'menu--open', 'menu--open-from-bottom-right')}>

              <ul className={classnames('menu__list')} role="menu">

                <Link to="/" tabIndex="0" role="menuitem" title="Back to App page" className={classnames('menu__item')}>Go back to apps</Link>

                <li className={classnames('menu__divider')} />

                <Link to={authenticated ? logout : login} tabIndex="0" role="menuitem" title={msg} className={classnames('menu__item')}>{msg}</Link>


              </ul>
            </div>
          </div>
        </section>

        <section className={classnames('toolbar__section')}>
          {/* add a loader here */}
          <Link to={home} className={classnames('toolbar__title')}>Voting App</Link>

        </section>

        <section className={classnames('toolbar__section', 'toolbar__section--align-end')}>
          {/* other content */}
        </section>
      </div>
    </header>);
  }
}

TopNav.propTypes = {
  onToggleMenu: func.isRequired,
  authenticated: bool.isRequired,
  menuIsOpen: bool.isRequired,
};

TopNav.contextTypes = {
  links: shape({
    login: string.isRequired,
    logout: string.isRequired,
    home: string.isRequired,
  }).isRequired,
  classnames: func.isRequired,
};

export default TopNav;
