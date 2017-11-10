import React from 'react';
import { number, func } from 'prop-types';
import Heart from './Heart';

const HealthBar = ({
  health,
  heartValue,
}, {
  classnames,
}) => {
  const n = Math.ceil(health / heartValue);
  const hearts = [...Array(n)].map((d, i) => {
    const h = (health - ((i + 1) * heartValue) > 0) ? heartValue : health - (i * heartValue);
    const p = (h / heartValue) * 100;
    const k = i;
    return (<Heart className={classnames('dungeon__heart')} key={k} size={32} percent={p} />);
  });
  return (<div className={classnames('dungeon__health-bar')}>
    {hearts}
  </div>);
};

HealthBar.propTypes = {
  health: number.isRequired,
  heartValue: number,
};

HealthBar.defaultProps = { heartValue: 20 };
HealthBar.contextTypes = { classnames: func.isRequired };

export default HealthBar;
