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

  <StartButton className="material-icons simon__start">play_circle_outline</StartButton>

  <ResetButton className="material-icons simon__reset">replay</ResetButton>

  <Wave
    className="simon__wave-select"
    classnames={{ waveShape: 'simon__wave-shape' }}
  />

  <Volume className="mdc-range-slider simon__volume" />
  <KeyBoard className="keys" />
</Container>);

export default Simon;
export { task };
