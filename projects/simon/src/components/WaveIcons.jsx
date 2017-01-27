import React, { PropTypes } from 'react';
import Sine from './SineIconSVG';
import Square from './SquareWaveIconSVG';
import Triangle from './TriangleIconSVG';
import Sawtooth from './SawtoothIconSVG';
import Constants from '../Constants';

const { SIN, TRI, SQU, SAW } = Constants.WAVES;

const WaveIcon = ({ wave, ...props }) => {
  switch (wave) {
    case SIN: return (<Sine {...props} />);
    case TRI: return (<Triangle {...props} />);
    case SQU: return (<Square {...props} />);
    case SAW: return (<Sawtooth {...props} />);
    default: return (<Sine {...props} />);
  }
};

WaveIcon.propTypes = {
  wave: PropTypes.oneOf([SIN, TRI, SQU, SAW]),
};

export default WaveIcon;
