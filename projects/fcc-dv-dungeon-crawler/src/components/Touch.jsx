import React, { PropTypes, Component } from 'react';
import Hammer from 'react-hammerjs';


class Touch extends Component {
  constructor(props) {
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);
  }
  handleSwipe(event) {
    const vel = Math.abs(event.overallVelocity);
    if (vel > 0.75) {
      if (event.angle > -100 && event.angle < -80) {
        this.props.onTouch({ x: 0, y: -1 });
      }
      if (event.angle > -10 && event.angle < 10) {
        this.props.onTouch({ x: 1, y: 0 });
      }
      if (event.angle > 80 && event.angle < 100) {
        this.props.onTouch({ x: 0, y: 1 });
      }
      if (Math.abs(event.angle) > 170) {
        this.props.onTouch({ x: -1, y: 0 });
      }
    }
  }
  render() {
    return (<Hammer onSwipe={this.handleSwipe}>{this.props.children}</Hammer>);
  }
}

Touch.propTypes = {
  children: PropTypes.node.isRequired,
  onTouch: PropTypes.func.isRequired,
};

export default Touch;
