import React, { Component } from 'react';
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
import Button from '../components/Button';
import './Simon.scss';

class Simon extends Component {
  constructor(props) {
    super(props);
    this.state = { showSettings: false };
    this.showSettings = this.showSettings.bind(this);
  }

  showSettings() { this.setState({ showSettings: !this.state.showSettings }); }

  render() {
    // const cn1 = 'mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone';
    const cn2 = 'mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone';

    return (<Container className="simon" >

      <h1 className="simon__header">Simon says <small className="simon__round">Round: </small>
        <Round className="simon__round--number" />
        <Button
          onClick={this.showSettings} className="material-icons md-24 simon__menu"
        >{(!this.state.showSettings) ? 'settings' : 'close'
        }</Button>
      </h1>

      {(this.state.showSettings) ? (<section className="simon__settings">

        <Mode
          className="mdc-button mdc-button--primary mdc-button--raised simon__difficulty--mode"
        />

        <h2 className="simon__volume">
        Volume <Volume className="mdc-range-slider simon__volume" /></h2>

        <Wave className="mdc-button mdc-button--accent mdc-button--raised simon__wave" />

      </section>) : null }

      <StartButton className="material-icons md-24 simon__start">play_circle_outline</StartButton>

      <ResetButton className="material-icons md-24 simon__reset">replay</ResetButton>

      <KeyBoard className="mdc-layout-grid simon__keys" classnames={{ key: `${cn2} key` }} />

    </Container>);
  }
}

export default Simon;
export { task };
