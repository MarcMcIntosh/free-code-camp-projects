import React from 'react';
import { func, array, bool } from 'prop-types';
import Cell from './Cell';

const Board = ({
  onClick,
  data,
  disabled,
  ...props
}, {
  classnames,
}) => (<table className={classnames('game-of-life__board')} {...props} >
  <tbody>{data.map((rows, i) => {
    const k = `row-${i}`;
    return (<tr key={k}>{rows.map((cell, ii) => {
      const kk = `${k}.cell-${ii}`;
      return (<td key={kk}><Cell value={`${i}.${ii}`} onClick={onClick} disabled={disabled} /></td>);
    })}</tr>);
  })}</tbody>
</table>);

Board.propTypes = {
  data: array.isRequired,
  onClick: func.isRequired,
  disabled: bool,
};

Board.defaultProps = { disabled: false };

Board.contextTypes = { classnames: func.isRequired };

export default Board;
