/* eslint jsx-a11y/no-static-element-interactions: off */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { togglePlay, setGame } from '../actions';

const mapStateToProps = (state) => {
  const { game, speed, running, timer, width, height } = state;
  return { game, speed, running, timer, width, height };
};

const mapDispatchToProps = dispatch => ({
  onTogglePlay: payload => dispatch(togglePlay(payload)),
  onSetGame: payload => dispatch(setGame(payload)),
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 'svg' };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { width, height } = state;
    return (<svg viewBox={`0 0 ${width} ${height}`}></svg>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
