/* eslint jsx-a11y/no-static-element-interactions: off */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setGame, nextGen, updateGen } from '../actions';

const mapStateToProps = (state) => {
  const { game, speed, running, timer, width, height, gen } = state;
  return { game, speed, running, timer, width, height, gen };
};

const mapDispatchToProps = dispatch => ({
  onSetGame: payload => dispatch(setGame(payload)),
  onNextGen: timer => dispatch(nextGen(timer)),
  onUpdateGen: () => dispatch(updateGen()),
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 'svg' };
    this.handleClickSVG = this.handleClickSVG.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { running, gen, speed, timer, onUpdateGen, onNextGen } = this.props;
    if (!running) {
      clearTimeout(timer);
    } else if (timer === prevProps.timer && gen === prevProps.gen) {
      clearTimeout(timer);
      onNextGen(setTimeout(onUpdateGen, speed));
    }
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
  onSetGame: func.isRequired,
  onNextGen: func.isRequired,
  onUpdateGen: func.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
  speed: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
