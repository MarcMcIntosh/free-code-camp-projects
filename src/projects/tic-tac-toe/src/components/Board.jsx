import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn, onAiMove, onCheckBoard } from '../actions';
import Constants from '../Constants';
import Button from './Button';

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
  }

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
    const { className, board, player, done, turn, classnames } = this.props;
    return (<div className={className}>{
      board.map((d, i) => {
        let cn;
        switch (d) {
          case X : cn = `${classnames.button} ${classnames.X}`; break;
          case O : cn = `${classnames.button} ${classnames.O}`; break;
          default: cn = `${classnames.button} ${classnames._}`;
        }
        return (<Button
          key={i}
          value={i}
          className={cn}
          onClick={this.handleClick}
          disabled={done || player !== turn || d === X || d === O}
        />);
      })
    }</div>);
  }
}

const { string, array, oneOf, shape, func, bool } = PropTypes;

Board.propTypes = {
  className: string,
  board: array,
  player: oneOf([_, O, X]),
  turn: oneOf([_, O, X]),
  takeTurn: func,
  aiMove: func,
  checkBoard: func,
  init: bool,
  done: bool,
  classnames: shape({
    game: string,
    button: string,
    _: string,
    X: string,
    O: string,
  }),
};

Board.defaultProps = {
  classnames: { game: '', button: '', _, X, O },
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);