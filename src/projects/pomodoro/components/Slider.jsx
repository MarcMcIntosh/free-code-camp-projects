/* eslint no-bitwise: ["error", { "int32Hint": true }] */
import React, { Component } from 'react';
import { func, number, string, oneOfType, bool } from 'prop-types';


/* for callculating where the thumb should go  using percent of range relative width */
const percentageSteps = (range, interval) => Array.from({
  length: 1 + Math.max(0, Math.ceil(range / interval)) | 0,
}, (d, i) => (100 / range) * (i * interval));

const trackWidth = ({ value, min, max, step }) => {
  const r0 = max - min;
  const r1 = r0 % step;
  const range = r0 - r1;
  const pos = (value - min) / step | 0;
  const arr = percentageSteps(range, step);
  return arr[pos];
};


/* The api we want is the same as a range pomodoro-slider
value, min, max, steps, onChange,
the varibales that have to calculated from that are
translateX, scaleX, focused, active and inTransit
*/

const toValue = ({ range, width, position }) => {
  /* clientX = width * (value / (max - min));
  clientX / width = value / (max - min);
  (clientX / width) * (max - min) = value; */
  const x0 = Math.max(position, 0);
  const x1 = Math.min(x0, width);
  return (x1 / width) * range;
};

/*
const fromValue = ({ range, value, width }) => {
  const scale = value / range;
  return width * scale;
};
*/

const nearestStep = ({ value, step }) => {
  // could use math abs to ensure positive comparison
  const half = step / 2 | 0;
  // here needs some works //
  const dif = value % step;
  const pad = (dif < half) ? 0 : step;
  return value + (pad - dif);
};

const calcChange = ({ range, width, position, step }) => {
  const value = toValue({ range, width, position });
  return nearestStep({ value, step });
};

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focus: false, inTransit: false };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mouseleave', this.onMouseUp);
  }
  onMouseDown() {
    this.setState({ active: true, focused: true });
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mouseleave', this.onMouseUp);
  }
  onMouseUp() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mouseleave', this.onMouseUp);
    this.setState({ active: false, inTransit: false, focused: false });
  }
  onMouseMove(event) {
    const { max, min, step } = this.props;
    const position = event.clientX;
    const width = this.root.clientWidth;
    /* this.will need some work */

    // const range = Math.abs(max - min);
    const range = max;
    const value = calcChange({ range, width, position, step });
    // console.log({ value, props, range, max, min, step });
    if (!this.state.inTransit) {
      this.setState({ inTransit: true });
    }
    if (this.props.value !== value) {
      this.props.onChange(Math.max(min, Math.min(max, value)));
    }
  }
  render() {
    const { min, max, value, label, step, name, disabled } = this.props;
    const w = trackWidth({ min, max, value, step });
    const { classnames } = this.context;
    return (<div className={classnames('pomodoro__input')}>
      <label className={classnames('pomodoro__label')} htmlFor={name}>{label}</label>
      <div
        ref={(root) => { this.root = root; }}
        className={classnames({
          'pomodoro-slider': true,
          'pomodoro-slider--disabled': disabled,
          'pomodoro-slider--active': this.state.active,
          'pomodoro-slider--focus': this.state.focus,
          'pomodoro-slider--in-transit': this.state.inTransit,
        })}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        data-step={step}
        aria-disabled={disabled}
        aria-label={label}
        tabIndex="0"
        name={name}
        disabled={disabled}
      >
        <div
          ref={(track) => { this.track = track; }}
          className={classnames('pomodoro-slider__track-container')}
        >
          <div className={classnames('pomodoro-slider__track')} style={{ width: `${w}%` }} />

          <div className={classnames('pomodoro-slider__track-marker-container')} />

        </div>

        <div
          role="presentation"
          className={classnames('pomodoro-slider__thumb-container')}
          style={{
            transform: 'translateX(-50%)',
            left: `${w}%`,
          }}
          onTouchStart={this.onTouchStart}
          onMouseDown={this.onMouseDown}
        >
          <div className={classnames('pomodoro-slider__pin')}>
            <span className={classnames('pomodoro-slider__pin-value-marker')}>{value}</span>
          </div>

          <svg className={classnames('pomodoro-slider__thumb')} width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>

          <div className={classnames('pomodoro-slider__focus-ring')} />
        </div>
      </div>
    </div>);
  }
}

Slider.propTypes = {
  max: oneOfType([number, string]).isRequired,
  min: oneOfType([number, string]).isRequired,
  value: oneOfType([number, string]).isRequired,
  label: string.isRequired,
  step: oneOfType([number, string]).isRequired,
  onChange: func.isRequired,
  disabled: bool,
  name: string.isRequired,
};

Slider.defaultProps = { disabled: false };

Slider.contextTypes = { classnames: func.isRequired };

export default Slider;
