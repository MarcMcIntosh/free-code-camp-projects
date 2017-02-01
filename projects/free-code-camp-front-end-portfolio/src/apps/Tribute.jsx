import React from 'react';
import {
  Quote,
  Image,
  task,
} from '../../lib/tribute-page';
import './Tribute.scss';

const HodorImg = require('../assets/Season_6_hodor_main.jpg');

const QUOTE = {
  TEXT: {
    TERM: 'Hodor',
    DESC: '--Hodor',
    SRC: 'http://gameofthrones.wikia.com/wiki/Hodor',
  },
};

const Tribute = () => (<div className="Tribute">
  <h1 className="Tribute__heading">Hodor</h1>
  <div className="Tribute__contnet">
    <Image className="Tribute__image" src={HodorImg} />
    <Quote className="Trinbute__quote" {...QUOTE} />
  </div>
</div>);

export default Tribute;
export { task };
