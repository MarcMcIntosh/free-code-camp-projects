import React, { PureComponent } from 'react';
import { func, node } from 'prop-types';

class GameOver extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = 0;
  }
  componentDidMount() { this.timer = setTimeout(this.props.onClick, 3000); }
  componentWillUnmount() { clearTimeout(this.timer); }
  render() {
    const { onClick, children, ...props } = this.props;

    const { classnames } = this.context;
    return (<div {...props}>
      <h2 className={classnames('tic-tac-toe__header')}>
        {children}
      </h2>
      <button type="button" title="Reset" tabIndex="0" className={classnames('tic-tac-toe__button', 'tic-tac-toe__button--reset')} onClick={onClick}>Reset</button>
    </div>);
  }
}

GameOver.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

GameOver.contextTypes = { classnames: func.isRequired };

export default GameOver;
