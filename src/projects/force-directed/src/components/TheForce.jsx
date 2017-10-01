import React, { PureComponent } from 'react';
import { object, array } from 'prop-types';
import useTheForce from '../use-the-force';

class TheForce extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }
  componentDidMount() { this.draw(); }
  componentDidUpdate() { this.draw(); }
  draw() {
    if (Object.hasOwnProperty.call(this.props.data, 'nodes') && this.props.flags.length > 0) {
      useTheForce(this.root, this.props.data, this.props.flags);
    }
  }
  render() {
    return (<div className="force-directed__container" ref={(c) => { this.root = c; }} />);
  }
}

TheForce.propTypes = {
  data: object.isRequired,
  flags: array.isRequired,
};

export default TheForce;
