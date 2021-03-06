import React from 'react';
import { number, string, oneOfType } from 'prop-types';
import SevenSegmentDisplay from './SevenSegmentDisplay';

const DoubleDigits = ({ data, ...props }) => {
  const str = (+data >= 10) ? data.toString() : '0' + data;
  return (<span {...props}>
    {str.split('').map((d, i) => {
      const k = i;
      return (<SevenSegmentDisplay key={k} data={d} />);
    })}
  </span>);
};

DoubleDigits.propTypes = {
  data: oneOfType([number, string]).isRequired,
};

export default DoubleDigits;
