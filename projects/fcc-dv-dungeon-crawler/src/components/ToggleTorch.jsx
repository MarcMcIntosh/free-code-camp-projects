import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import toggleDarkness from '../actions/Darkness';

const mapStateToProps = state => ({ darkness: state.darkness });

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleDarkness()),
});

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
      ref={(button) => { this.button = button; }}
      onFocus={this.handleFocus}
    />);
  }
}

ToggleTourch.propTypes = {
  darkness: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTourch);
