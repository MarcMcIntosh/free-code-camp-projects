import React from 'react';
import Container, {
  KeyBoard,
  Wave,
  Mode,
  Round,
  StartButton,
  ResetButton,
  Volume,
  task,
} from '../../lib/simon';
import './Simon.scss';

const Simon = () => (<Container className="simon" >
  <Round className="simon__round" />

  <Mode className="simon__mode" />

  <StartButton className="material-icons md-24 simon__start">play_circle_outline</StartButton>

  <ResetButton className="material-icons md-24 simon__reset">replay</ResetButton>

  <Wave className="simon__wave" />

  <Volume className="mdc-range-slider simon__volume" />
  <KeyBoard className="keys" />
</Container>);

export default Simon;
export { task };
