import React, { PureComponent } from 'react';
import { func, string, shape, bool } from 'prop-types';
import { Link } from 'react-router-dom';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClickOutSide = this.handleClickOutSide.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  componentDidMount() { document.addEventListener('mousedown', this.handleClickOutside); }

  componentWillUnmount() { document.removeEventListener('mousedown', this.handleClickOutside); }

  setRef(node) { this.node = node; }

  handleClickOutSide(event) {
    if (this.props.menuIsOpen && this.node && !this.node.contains(event.target)) {
      this.props.onToggleMenu();
    }
  }
  render() {
    const { classnames, links: { login, logout, home } } = this.context;
    const { menuIsOpen, onToggleMenu, authenticated } = this.props;

    const msg = authenticated ? 'Sign Out' : 'Sign In';

    return (<header className={classnames('toolbar')}>
      <div className={classnames('toolbar__row')}>

        <section className={classnames('toolbar__section', 'toolbar__section--align-start')}>

          <Link to="/" title="Back to App page" className={classnames('material-icons', 'toolbar__icon')}>home</Link>

          <Link to={home} className={classnames('toolbar__title')}>Voting App</Link>

        </section>

        <section className={classnames('toolbar__section')}>
          {/* add a loader here */}
        </section>

        <section className={classnames('toolbar__section', 'toolbar__section--align-end')}>
          <div className={classnames('menu__anchor')}>

            <button tabIndex="0" className={classnames('material-icons', 'toolbar__menu-icon')} onClick={onToggleMenu}>menu</button>

            <div tabIndex="-1" className={classnames('menu', menuIsOpen && 'menu--open', 'menu--open-from-bottom-right')}>

              <ul className={classnames('menu__list')} role="menu">

                <Link to={authenticated ? logout : login} tabIndex="0" role="menuitem" title={msg} className={classnames('menu__item')}>{msg}</Link>

              </ul>

            </div>
          </div>
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
