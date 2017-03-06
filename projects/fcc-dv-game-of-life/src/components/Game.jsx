/* eslint jsx-a11y/no-static-element-interactions: off */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setGame, nextGen, updateGen } from '../actions';
import Table from './Table';

const mapStateToProps = (state) => {
  const { game, speed, running, timer, gen } = state;
  return { game, speed, running, timer, gen };
};

const mapDispatchToProps = dispatch => ({
  onSetGame: payload => dispatch(setGame(payload)),
  onNextGen: timer => dispatch(nextGen(timer)),
  onUpdateGen: () => dispatch(updateGen()),
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { running, gen, speed, timer, onUpdateGen, onNextGen } = this.props;
    if (!running) {
      clearTimeout(timer);
    } else if (timer === prevProps.timer && gen === prevProps.gen) {
      clearTimeout(timer);
      const t = setTimeout(() => onUpdateGen(), speed);
      onNextGen(t);
    }
  }
  handleClick(event) {
    const nm = event.target.name.split('.');
    const y = nm[0];
    const x = nm[1];
    const v = event.target.value;
    const arr = this.props.game.slice();
    arr[y][x] = v ? 0 : 1;
    this.props.onSetGame(arr);
  }
  render() {
    const { game } = this.props;
    return (<Table data={game} onClick={this.handleClick} />);
  }
}

const { func, number, array, bool } = PropTypes;
Game.propTypes = {
  game: array.isRequired,
  running: bool.isRequired,
  onSetGame: func.isRequired,
  onNextGen: func.isRequired,
  onUpdateGen: func.isRequired,
  gen: number.isRequired,
  timer: number.isRequired,
  speed: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
