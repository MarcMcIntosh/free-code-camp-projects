import React from 'react';
import { func, string, oneOfType, number } from 'prop-types';

const convertToBin = (n) => {
  switch (+n) {
    case 0: return 0x7E.toString(2);
    case 1: return '0' + 0x30.toString(2);
    case 2: return 0x6D.toString(2);
    case 3: return 0x79.toString(2);
    case 4: return '0' + 0x33.toString(2);
    case 5: return 0x5B.toString(2);
    case 6: return 0x5F.toString(2);
    case 7: return 0x70.toString(2);
    case 8: return 0x7F.toString(2);
    case 9: return 0x7B.toString(2);
    default: return n;
  }
};

const ledPosition = (n) => {
  switch (n) {
    case 0: return '0,0 2,2 10,2 12,0';
    case 1: return '12,0 10,2 10,10 12,12';
    case 2: return '12,12 10,14 10,22 12,24';
    case 3: return '0,24 2,22 10,22 12,24';
    case 4: return '0,12 2,14 2,22 0,24';
    case 5: return '0,0 2,2 2,10 0,12';
    // case 6: return '1,12 3,13 9,13 11,12 9,11 3,11';
    case 6: return '0,12 2,13 10,13 12,12 10,11 2,11';
    default: return n;
  }
};

const SevenSegmentDisplay = ({ data }, { classnames }) => (<svg viewBox="0 0 12 24" className={classnames('simon__digit')}>
  {convertToBin(data).split('').map((d, i) => {
    const pos = ledPosition(i);
    const mod = (+d) ? 'simon__led--on' : 'simon__led--off';
    return (<polygon key={pos} points={pos} className={classnames('simon__led', mod)} />);
  })}
</svg>);

SevenSegmentDisplay.propTypes = {
  data: oneOfType([number, string]).isRequired,
};

SevenSegmentDisplay.contextTypes = { classnames: func.isRequired };

export default SevenSegmentDisplay;
