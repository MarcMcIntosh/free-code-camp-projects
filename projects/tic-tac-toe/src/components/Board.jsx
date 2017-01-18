import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { onTakeTurn } from '../actions';
import Button from './Button';

const mapStateToProps = state => ({
  board: state.board,
  player: state.player,
  ai: state.ai,
  turn: state.turn,
});

const mapDispatchToProps = dispatch => ({
  takeTurn: arr => dispatch(onTakeTurn(arr)),
});


class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(event);
    const arr = this.props.board.slice();
    const val = event.target.value.split(':');
    arr[val[0]][val[1]] = this.props.player;
    this.props.takeTurn(arr);
  }
  render() {
    const { board, player, ai, turn, ...props } = this.props;
    delete props.takeTurn;

    return (<table {...props}>
      <thead><tr><th colSpan="3">{
        (turn === player) ? 'Player\'s ' : 'Computer\'s '}Turn</th></tr></thead>
      <tbody>{
        board.map((row, i) => (<tr key={i}>{
          row.map((cell, ii) => (<td key={ii}>
            <Button
              disabled={turn !== player || cell === (ai || player)}
              onClick={this.handleClick}
              value={`${i}:${ii}`}
            >{cell}</Button>
          </td>))
        }</tr>))
      }</tbody>
    </table>);
  }
}

Board.propTypes = {
  board: PropTypes.array,
  player: PropTypes.string,
  ai: PropTypes.string,
  turn: PropTypes.string,
  takeTurn: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
