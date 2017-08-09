import React, { PropTypes } from 'react';
import Heart from './Heart';

const HealthBar = ({
  health,
  heartValue,
}) => {
  const n = Math.ceil(health / heartValue);
  const hearts = [...Array(n)].map((d, i) => {
    const h = (health - ((i + 1) * heartValue) > 0) ? heartValue : health - (i * heartValue);
    const p = (h / heartValue) * 100;
    const k = i;
    return (<Heart className="dungeon__heart" key={k} size={32} percent={p} />);
  });
  return (<div className="dungeon__health-bar">
    {hearts}
  </div>);
};

HealthBar.propTypes = {
  health: PropTypes.number.isRequired,
  heartValue: PropTypes.number,
};

HealthBar.defaultProps = { heartValue: 20 };

export default HealthBar;
