import React from 'react';
import { func } from 'prop-types';

const Dpad = ({ onMouseDown, onMouseUp, ...props }, { classnames }) => (<div className={classnames('dungeon__d-pad')} {...props}>
  <button className={classnames('dungeon__d-pad__button', 'dungeon__d-pad__button--up')} onMouseDown={() => onMouseDown('up')} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />

  <button className={classnames('dungeon__d-pad__button', 'dungeon__d-pad__button--left')} onMouseDown={() => onMouseDown('left')} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />

  <button className={classnames('dungeon__d-pad__button', 'dungeon__d-pad__button--disabled')} disabled />

  <button className={classnames('dungeon__d-pad__button', 'dungeon__d-pad__button--right')} onMouseDown={() => onMouseDown('right')} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />

  <button className={classnames('dungeon__d-pad__button', 'dungeon__d-pad__button--down')} onMouseDown={() => onMouseDown('down')} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} />

</div>);

Dpad.propTypes = {
  onMouseDown: func.isRequired,
  onMouseUp: func.isRequired,
};

Dpad.contextTypes = { classnames: func.isRequired };

export default Dpad;
