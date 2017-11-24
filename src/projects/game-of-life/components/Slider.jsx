import React, { Component } from 'react';
import { func, number, string, oneOfType, bool } from 'prop-types';

/* The api we want is the same as a range slider
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
  const half = step / 2;
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
    const { min, max, value, label, step, ...props } = this.props;
    // const range = Math.abs(max - min);
    // const sX = value / range;
    const sX = (value - min) / (max - min);
    const { classnames } = this.context;

    return (<div
      ref={(root) => { this.root = root; }}
      className={classnames({
        slider: true,
        'slider--active': this.state.active,
        'slider--focus': this.state.focus,
        'slider--in-transit': this.state.inTransit,
      })}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label={label}
      data-step={step}
      tabIndex="0"
      {...props}
    >
      <div
        ref={(track) => { this.track = track; }}
        className={classnames('slider__track-container')}
      >
        <div className={classnames('slider__track')} style={{ transform: `scaleX(${sX})` }} />
        <div className={classnames('slider__track-marker-container')} />
      </div>

      <div
        role="presentation"
        className={classnames('slider__thumb-container')}
        style={{
          transform: 'translateX(-50%)',
          left: `${sX * 100}%`,
        }}
        onTouchStart={this.onTouchStart}
        onMouseDown={this.onMouseDown}
      >
        <div className={classnames('slider__pin')}>
          <span className={classnames('slider__pin-value-marker')}>{value}</span>
        </div>

        <svg className={classnames('slider__thumb')} width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>

        <div className={classnames('slider__focus-ring')} />

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
};

Slider.defaultProps = { disabled: false };

Slider.contextTypes = { classnames: func.isRequired };

export default Slider;
