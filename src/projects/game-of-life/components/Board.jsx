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
}) => {
  const tdClass = classnames('game-of-life__td');
  return (<table className={classnames('game-of-life__table')} {...props} >
    <tbody>{data.map((rows, i) => {
      const k = `row-${i}`;
      return (<tr key={k}>{rows.map((cell, ii) => {
        const kk = `${k}.cell-${ii}`;
        const val = `${i} ${ii}`;
        return (<td key={kk} className={tdClass}>
          <Cell value={val} checked={!!parseInt(cell, 10)} onChange={onClick} disabled={disabled} />
        </td>);
      })}</tr>);
    })}</tbody>
  </table>);
};

Board.propTypes = {
  data: array.isRequired,
  onClick: func.isRequired,
  disabled: bool,
};

Board.defaultProps = { disabled: false };

Board.contextTypes = { classnames: func.isRequired };

export default Board;
