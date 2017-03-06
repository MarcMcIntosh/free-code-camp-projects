/* eslint react/no-array-index-key: off */
import React, { PropTypes } from 'react';
import Button from './Button';

const Table = ({
  data,
  onClick,
  ...props
}) => (
  <table {...props}>{data.map((y, i) => (<tr key={i}>{
    y.map((x, ii) => (<td className="cell" key={ii}>
      <Button value={x} onClick={onClick} name={`${i}.${ii}`} />
    </td>))}</tr>
  ))}</table>
);

const { array, func } = PropTypes;
Table.propTypes = {
  data: array.isRequired,
  onClick: func.isRequired,
};

export default Table;
