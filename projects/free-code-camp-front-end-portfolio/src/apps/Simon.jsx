import React from 'react';
import Container, {
  KeyBoard,
  Wave,
  Mode,
  Round,
  StartStop,
  Volume,
  task,
} from '../../lib/simon';
import './Simon.scss';

const Simon = () => (<Container>
  <h3>Round: <Round /></h3>
  <h4>Difficulty: <Mode /></h4>
  <StartStop />
  <b>Sound Wave: <Wave /></b>
  <div>Vol: <Volume /></div>
  <KeyBoard className="keys" />
</Container>);

export default Simon;
export { task };
