import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import {
  setSpeed,
  setSize,
} from '../actions';


const mapStateToProps = state => ({
  width: state.width,
  speed: state.speed,
});

const mapDispatchToProps = dispatch => ({
  onSetSpeed: event => dispatch(setSpeed(event.target.value)),
  onSetSize: obj => dispatch(setSize(obj)),
});

const BottomMenu = ({
  onSetSize,
  onSetSpeed,
  width,
  speed,
}) => (<div className="bottom-menu">
  <div className="size" >Board size:
    <span className="button__group">
      <Button
        disabled={width === 16}
        onClick={() => onSetSize({ width: 16, height: 16 })}
      >16x16</Button>
      <Button
        disabled={width === 50}
        onClick={() => onSetSize({ width: 50, height: 30 })}
      >50X30</Button>
      <Button
        disabled={width === 70}
        onClick={() => onSetSize({ width: 70, height: 50 })}
      >70X50</Button>
      <Button
        disabled={width === 100}
        onClick={() => onSetSize({ width: 100, height: 80 })}
      >100X80</Button>
    </span>
  </div>
  <div className="speed">
  Delay:
  <input
    type="range"
    step={100} min={0} max={1000} value={speed}
    onChange={onSetSpeed}
    className="mdc-range-slider mdc-range-slider--primary"
  />
  </div>
</div>);

const { func, number } = PropTypes;
BottomMenu.propTypes = {
  onSetSize: func.isRequired,
  width: number.isRequired,
  speed: number.isRequired,
  onSetSpeed: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);
