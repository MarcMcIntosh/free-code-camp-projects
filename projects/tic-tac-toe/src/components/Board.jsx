import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn, onAiMove, onCheckBoard } from '../actions';
import Constants from '../Constants';
import Game from './Game';

const { _, O, X } = Constants.PLAYER;

const mapStateToProps = state => ({
  board: state.board,
  player: state.player,
  turn: state.turn,
  ai: state.ai,
  init: state.init,
  done: state.done,
});

const mapDispatchToProps = dispatch => ({
  takeTurn: (arr, i) => dispatch(onTakeTurn(arr, i)),
  aiMove: (arr, i) => dispatch(onAiMove(arr, i)),
  checkBoard: arr => dispatch(onCheckBoard(arr)),
});


class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.makeAiMove = this.makeAiMove.bind(this);
  }

  /* Move this to did receive props  and check if board if full or if some-one have won*/
  componentWillReceiveProps(nextProps) {
    const { turn, checkBoard, init, aiMove } = this.props;
    if (!init && !nextProps.done && turn !== nextProps.turn) {
      checkBoard(nextProps.board);
    }
    if (!nextProps.init && nextProps.ai === nextProps.turn) {
      aiMove(nextProps.board, nextProps.ai);
    }
  }
  handleClick(event) {
    const { takeTurn, player, board } = this.props;
    const arr = board.slice();
    arr[event.target.value] = player;
    return takeTurn(arr, player);
  }

  render() {
    const { board, player, done, turn, ...props } = this.props;
    delete props.takeTurn;
    delete props.ai;
    delete props.init;
    delete props.aiMove;
    delete props.checkBoard;
    return (<div {...props}>
      <Game
        className="board"
        board={board}
        player={player}
        turn={turn}
        done={done}
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
  checkBoard: PropTypes.func,
  init: PropTypes.bool,
  done: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
