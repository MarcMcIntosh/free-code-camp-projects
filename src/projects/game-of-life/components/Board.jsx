import React, { PureComponent } from 'react';
import { func, array, bool, number } from 'prop-types';
import Cell from './Cell';

const nextTick = (arr) => {
  const r0 = arr.length;
  const nextGame = new Array(r0);
  for (let r = 0; r < r0; r += 1) {
    nextGame[r] = new Array(arr[r].length);
  }
  for (let i = 0; i < r0; i += 1) {
    const c0 = arr[i].length;
    for (let ii = 0; ii < c0; ii += 1) {
      let n = 0;
      for (let nx = -1; nx <= 1; nx += 1) {
        for (let ny = -1; ny <= 1; ny += 1) {
          const x = i + nx;
          const y = ii + ny;
          const isInArr = (typeof arr[x] !== 'undefined' && typeof arr[x][y] !== 'undefined');
          if (nx !== 0 && nx !== 0 && isInArr && arr[x][y]) {
            n += 1;
          }
        }
      }
      switch (n) {
        case 0:
        case 1: nextGame[i][ii] = 0; break;
        case 2: nextGame[i][ii] = arr[i][ii]; break;
        case 3: nextGame[i][ii] = 1; break;
        default: nextGame[i][ii] = 0;
      }
    }
  }
  return nextGame;
};

class Board extends PureComponent {
  componentDidMount() {
    const nextGame = nextTick(this.props.game);
    setTimeout(() => {
      this.props.setGame(nextGame);
    }, 500);
  }
  shouldComponentUpdate(nextProps) {
    const r0 = this.props.game.length;
    const r1 = nextProps.game.length;
    const curr = [].concat(...this.props.game);
    const next = [].concat(...nextProps.game);
    if (this.props.disabled !== nextProps.disabled) {
      return true;
    } else if (r0 !== r1) {
      return true;
    } else if (curr.length !== next.length) {
      return true;
    } else if (this.props.running !== nextProps.running) {
      return true;
    }
    for (let i = 0; i < curr.length; i += 1) {
      if (curr[i] !== next[i]) return true;
    }
    return false;
  }
  componentDidUpdate() {
    if (this.props.running) {
      const nextGame = nextTick(this.props.game);
      setTimeout(() => this.props.setGame(nextGame), this.props.speed);
    }
  }
  render() {
    const { onClick, game, disabled } = this.props;
    const { classnames } = this.context;
    const tdClass = classnames('game-of-life__td');
    return (<table className={classnames('game-of-life__table')}>
      <tbody>{game.map((rows, i) => {
        const k = `row-${i}`;
        return (<tr key={k}>{rows.map((cell, ii) => {
          const kk = `${k}.cell-${ii}`;
          const val = `${i} ${ii}`;
          return (<td key={kk} className={tdClass}>
            <Cell value={val} checked={!!(+cell)} onChange={onClick} disabled={disabled} />
          </td>);
        })}</tr>);
      })}</tbody>
    </table>);
  }
}

Board.propTypes = {
  game: array.isRequired,
  onClick: func.isRequired,
  setGame: func.isRequired,
  speed: number.isRequired,
  running: bool.isRequired,
  disabled: bool,
};

Board.defaultProps = { disabled: false };

Board.contextTypes = { classnames: func.isRequired };

export default Board;
