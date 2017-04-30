import React, { PureComponent } from 'react';
import { axis } from 'd3-axis';
import { select } from 'd3-selection';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  renderAxis() {
  /*  var node  = this.refs.axis;
    var axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    d3.select(node).call(axis);
  */
  }

  render() {
    return (<g
      className={this.props.className}
      transform={this.props.transform}
      ref={(a) => { this.axis = a; }} />);
  }
}

Axis.propTypes = {
  ticks: number,
  orient: string.isRequired,
  scale: func.isRequired,
}
