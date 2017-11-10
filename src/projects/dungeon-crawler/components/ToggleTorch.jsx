import React from 'react';
import { bool, func } from 'prop-types';
/*
class ToggleTourch extends PureComponent {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
  }
  handleFocus(event) {
    event.preventDefault();
    this.button.blur();
  }
  render() {
    const cn = this.props.darkness ? 'dungeon__torch dungeon__torch--off' : 'dungeon__torch dungeon__torch--on';
    return (<button
      className={cn}
      onClick={this.props.onToggle}
      title={(this.props.darkness) ? 'Turn on Light' : 'Turn Off Light'}
      ref={(button) => { this.button = button; }}
      onFocus={this.handleFocus}
    />);
  }
}
*/

const ToggleTourch = ({ value, ...props }, { classnames }) => (<button
  tabIndex="0"
  title={value ? 'Turn Lights On' : 'Turn Light Off'}
  className={classnames('dungeon__torch', value ? 'dungeon__torch--off' : 'dungeon__torch--on')}
  {...props}
/>);

ToggleTourch.propTypes = { value: bool.isRequired };

ToggleTourch.contextTypes = { classnames: func.isRequired };

export default ToggleTourch;
