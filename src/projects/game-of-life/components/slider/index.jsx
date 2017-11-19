import React, { Component } from 'react';
import { func, string, number, bool } from 'prop-types';
import Thumb from './Thumb';


class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focus: false };
  }
  render() {
    const { discrete, disabled, value, max, min, label } = this.props;
    const track = `scaleX(${value / max}`;
    return (<div
    ref={(root) => { this.root = root; } }
    class="mdc-slider mdc-slider--discrete"
    tabindex="0"
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    aria-label="Select Value"
    >
     <div
      class="mdc-slider__track-container"
     >
     <div class="mdc-slider__track" style={{ transform: track }}>
    </div>
    </div>
    <div
      class="mdc-slider__thumb-container"
      style="transform: translateX(228.96px) translateX(-50%);"
    >
    <div class="mdc-slider__pin">
    <span class="mdc-slider__pin-value-marker">27</span>
    </div>
    <svg
      class="mdc-slider__thumb"
      width="21"
      height="21"
    >
    <circle
      cx="10.5"
      cy="10.5"
      r="7.875"
    ></circle>
    </svg>
    <div class="mdc-slider__focus-ring"></div>
    </div>
    </div>
  )
}
