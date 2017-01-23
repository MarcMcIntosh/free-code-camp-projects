import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn, onAiMove } from '../actions';
import Constants from '../Constants';
import Game from './Game';

const { _, O, X } = Constants.PLAYER;

const mapStateToProps = state => ({
  board: state.board,
  player: state.player,
  turn: state.turn,
  ai: state.ai,
  init: state.init,
});

const mapDispatchToProps = dispatch => ({
  takeTurn: i => dispatch(onTakeTurn(i)),
  aiMove: () => dispatch(onAiMove),
});


class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    return this.props.takeTurn(event.target.value);
  }
  render() {
    const { board, init, player, turn, aiMove, ai, ...props } = this.props;
    delete props.takeTurn;
    if (!init && turn === ai) { aiMove(); }
    return (<div {...props}>
      <Game
        className="board"
        board={board}
        player={player}
        turn={turn}
        onClick={this.handleClick}
      />
    </div>);
  }
}

Board.propTypes = {
  board: PropTypes.array,
  player: PropTypes.oneOf([_, O, X]),
  ai: PropTypes.oneOf([_, O, X]),
  turn: PropTypes.oneOf([_, O, X]),
  takeTurn: PropTypes.func,
  aiMove: PropTypes.func,
  init: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
