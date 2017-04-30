import React, { Component } from 'react';
import {
  array,
  arrayOf,
  number,
} from 'prop-types';
import format from 'd3-format';
import { scaleLinear, scaleTime } from 'd3-scale';
import { extent, max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';

const xScale = ({
  data,
  width,
}) => scaleTime().range([0, width]).domain(extent(data, d => new Date(d[0])));

const xAxis = ({ width, data, ticks }) => axisBottom.call(xScale, width, data).ticks(ticks);

const yScale = ({
  height,
  data,
}) => scaleLinear().rangeRound([height, 0]).domain([0, max(data, d => d[1])]);

const yAxis = ({ height, data }) => axisLeft(this.yScale).tickFormat(this.format);
// yScale.propTypes = { data: arrayOf(array).isRequired, height: number.isRequired };


class Chart extends Component {
  constructor(props) {
    super(props);
    const phi = (1 + Math.sqrt(5)) / 2;
    const margins = { top: 10, right: 30, bottom: 30, left: 75 };
    this.viewBox = { height: 600, width: 600 * phi };
    this.width = this.viewBox.width - margins.left - margins.right;
    this.height = this.viewBox.height - margins.top - margins.bottom;
    this.format = format('$,.2f');

    this.xScale = scaleTime().range([
      0,
      this.width,
    ]).domain(extent(this.props.data, d => new Date(d[0])));

    this.xAxis = axisBottom(this.xScale).ticks(5);

    this.yScale = scaleLinear().rangeRound([
      this.height,
      0,
    ]).domain([0, max(this.props.data, d => d[1])]);

    this.yAxis = axisLeft(this.yScale).tickFormat(this.format);
  }
  render() {
    return (<div
      className="bar-chart__container"
      ref={(chart) => { this.chart = chart; }}
    ><svg
      className="bar-chart__graph"
      viewBox={`0 0 ${vw} ${vh}`}
      preserveAspectRatio="xMidYMid meet"
    />
    </div>);
  }
};

Chart.propTypes = {
  data: arrayOf(array).isRequired,
}


export default Chart;
