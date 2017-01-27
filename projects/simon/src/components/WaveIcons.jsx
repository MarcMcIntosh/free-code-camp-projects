import React, { PropTypes } from 'react';
import Sine from './icons/SineIconSVG';
import Square from './icons/SquareWaveIconSVG';
import Triangle from './icons/TriangleIconSVG';
import Sawtooth from './icons/SawtoothIconSVG';
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
