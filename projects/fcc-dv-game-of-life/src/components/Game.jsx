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
    this.handleClickSVG = this.handleClickSVG.bind(this);
  }
  handleClickSVG(event) {
    const arr = this.props.game.slice();
    const { y, x } = event.target;
    arr[y][x] = (arr[y][x]) ? 0 : 1;
    this.props.onSetGame(arr);
  }
  render() {
    const { width, height, game } = this.props;
    return (<svg className="board" viewBox={`0 0 ${width} ${height}`}>{game.map((y, i) => y.map((x, ii) => (
      <rect onClick={this.handleClickSVG} y={i} x={ii} width="1" height="1" className={(x) ? 'cell--alive' : 'cell--dead'} />
    )))
    }</svg>);
  }
}

const { func, number, array, bool } = PropTypes;
Game.propTypes = {
  game: array.isRequired,
  running: bool.isRequired,
  onTogglePlay: func.isRequired,
  onSetGame: func.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
