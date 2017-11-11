import React, { PureComponent } from 'react';
import { func, number, string } from 'prop-types';

class Weapon extends PureComponent {
  componentDidMount() {
    this.img = new Image();
    this.img.src = this.props.src;
    this.img.onload = () => {
      this.draw();
    };
  }
  componentDidUpdate() { this.draw(); }
  draw() {
    const ctx = this.canvas.getContext('2d');
    const { sx, sy, sw, sh } = this.props;
    ctx.drawImage(this.img, sx, sy, sw, sh, 0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  }
  render() {
    return (<canvas width="24px" height="24px" className={this.context.classnames('dungeon__weapon')} ref={(c) => { this.canvas = c; }} />);
  }
}

Weapon.propTypes = {
  sx: number.isRequired,
  sy: number.isRequired,
  sw: number.isRequired,
  sh: number.isRequired,
  src: string.isRequired,
};

Weapon.contextTypes = { classnames: func.isRequired };

export default Weapon;
