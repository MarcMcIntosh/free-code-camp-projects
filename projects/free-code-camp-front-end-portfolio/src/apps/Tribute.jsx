import React from 'react';
import {
  Title,
  Image,
  Quotes,
} from '../../lib/tribute-page';

const HodorImg = require('../assets/Season_6_hodor_main.jpg');

const TITLE = {
  className: '',
  TEXT: {
    TERM: 'Hodor',
    DESC: '--Hodor',
    SRC: 'http://gameofthrones.wikia.com/wiki/Hodor',
  },
  TERM: { className: '' },
  DESC: { className: '' },
  SRC: { className: '' },
};
const IMAGE = { className: '', src: HodorImg };
const QUOTES = {
  className: '',
  QUOTE: { className: '' },
  list: [
    'And lowers it when he\'s going to dodge, m\'lady.',
    'Hold the door....',
    'holdthedoor...',
    'holthdor...',
    'holdor...',
    'hodor...',
    'hodor...',
    'hodor.',
  ],
};

const Tribute = () => (<div>
  <Title config={TITLE} />
  <Image config={IMAGE} />
  <Quotes config={QUOTES} />
</div>);

export default Tribute;
