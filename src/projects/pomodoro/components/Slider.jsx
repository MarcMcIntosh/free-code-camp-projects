/* eslint no-bitwise: ["error", { "int32Hint": true }] */
import React, { Component } from 'react';
import { func, number, string, oneOfType, bool } from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.state = {
      active: false,
      focus: false,
      inTransit: false,
      steps: this._steps(),
    };
  }
  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
  }
  onMouseDown(event) {
    event.preventDefault();
    window.addEventListener('mouseup', this.onMouseUp);
    this.root.addEventListener('mousemove', this.onMouseMove);
    this.setState({ active: true, focused: true });
  }
  onMouseUp(event) {
    event.preventDefault();
    this.root.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    this.setState({ active: false, inTransit: false, focused: false });
  }
  onMouseMove(event) {
    const { movementX, clientX } = event;
    event.preventDefault();
    /* clientWidth might be avaibable from the event */
    const { max, min, step } = this.props;
    const pixlesPerStep = Math.ceil(this.root.clientWidth / this.state.steps.length);
    const index = Math.floor(clientX / pixlesPerStep);
    const v = index * step;
    const val = v + (+min);
    const value = Math.min(max, val);
    this.setState({ inTransit: !!(movementX) }, () => {
      this.props.onChange(value);
    });
  }
  _steps() {
    const { min, max, step } = this.props;
    const r0 = max - min;
    const r1 = r0 % step;
    const range = r0 - r1;
    return Array.from({ length: 1 + Math.max(0, Math.ceil(range / step)) }, (d, i) => (100 / range) * (i * step));
  }
  _position() {
    const r = this.props.value - this.props.min;
    const index = Math.floor(r / this.props.step);
    return this.state.steps[index];
  }
  render() {
    const { min, max, value, label, step, name, disabled } = this.props;
    const w = this._position();
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
        onClick={this.onMouseMove}
      >
        <div
          ref={(track) => { this.track = track; }}
          className={classnames('pomodoro-slider__track-container')}
        >
          <div className={classnames('pomodoro-slider__track')} style={{ width: `${w}%` }} />

          <div className={classnames('pomodoro-slider__track-marker-container')}>{this.state.steps.map(d => (<div
            key={d}
            className={classnames('pomodoro-slider__track-marker')}
            style={{ left: d + '%', transform: `translateX(${0 - d}%)` }}
          />))}</div>

        </div>

        <div
          role="presentation"
          className={classnames('pomodoro-slider__thumb-container')}
          style={{
            transform: 'translateX(-50%)',
            left: `${w}%`,
          }}
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
