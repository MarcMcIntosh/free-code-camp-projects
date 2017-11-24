import React from 'react';
import { func } from 'prop-types';

const Rules = (props, { classnames }) => {
  const liClassName = classnames('game-of-life__list-item');
  return (<div {...props} className={classnames('game-of-life__rules')}>
    <ul className={classnames('game-of-life__list')}>
      <li className={liClassName}>
        Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
      </li>
      <li className={liClassName}>
        Any live cell with two or three live neighbours lives on to the next generation.
      </li>
      <li className={liClassName}>
        Any live cell with more than three live neighbours dies, as if by overpopulation.
      </li>
      <li className={liClassName}>
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      </li>
    </ul>
  </div>);
};

Rules.contextTypes = { classnames: func.isRequired };

export default Rules;
