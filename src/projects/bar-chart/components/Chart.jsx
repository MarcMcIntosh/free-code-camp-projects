import React, { PureComponent } from 'react';
import {
  array,
  arrayOf,
  func,
} from 'prop-types';
import { format } from 'd3-format';
import { scaleLinear, scaleTime } from 'd3-scale';
import { extent, max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import { timeParse } from 'd3-time-format';

class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }
  componentDidMount() {
    this.draw();
  }
  componentDidUpdate() {
    this.draw();
  }
  draw() {
    const cx = this.context.classnames;
    const parseTime = timeParse('%Y-%m-%d');
    const data = this.props.data.slice().map(d => [
      parseTime(d[0]),
      d[1],
    ]);
    const phi = (1 + Math.sqrt(5)) / 2;
    const h = 600;
    const w = h * phi;
    const margins = { top: 10, right: 30, bottom: 30, left: 75 };
    const width = w - margins.left - margins.right;
    const height = h - margins.top - margins.bottom;
    const svg = select(this.chart);
    svg.attr('viewBox', `0 0 ${w} ${h}`);
    svg.attr('preserveAspectRatio', 'xMidYMid meet');

    const xScale = scaleTime().range([
      0,
      width,
    ]).domain(extent(data, d => d[0]));
    const yScale = scaleLinear().rangeRound([
      height,
      0,
    ]).domain([0, max(data, d => d[1])]);

    const formatCurrency = format('$,.2f');
    /* Could use d3.axis */
    const xAxis = axisBottom(xScale).ticks(5);
    const yAxis = axisLeft(yScale).tickFormat(formatCurrency);

    const g = svg.append('g').attr('transform', `translate(${margins.left},${margins.top})`);

    g.append('g').attr('class', cx('bar-chart__axis'))
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    g.append('g').attr('class', cx('bar-chart__axis'))
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 8)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Gross Domestic Product, USA');

    const barWidth = (width / data.length) / 2;
    const barCx = cx('bar-chart__bar');
    g.selectAll(barCx).data(data)
      .enter().append('rect')
      .attr('class', barCx)
      .attr('x', d => xScale(d[0]))
      .attr('y', d => yScale(d[1]))
      .attr('width', barWidth)
      .attr('height', d => height - yScale(d[1]));
  }
  render() {
    return (<svg
      className={this.props.classnames('bar-chart__graph')}
      ref={(chart) => { this.chart = chart; }}
    />);
  }
}

Chart.propTypes = {
  data: arrayOf(array).isRequired,
  classnames: func.isRequired,
};


export default Chart;
