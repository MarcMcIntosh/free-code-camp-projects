import React, { PureComponent } from 'react';
import { number, shape, array } from 'prop-types';
import { select, event } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { extent } from 'd3-array';
import { format } from 'd3-format';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeYear, timeMonth } from 'd3-time';
import { scaleSequential, scaleTime, scaleBand } from 'd3-scale';
import 'd3-transition';

class HeatMap extends PureComponent {
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
    if (Object.keys(this.props.data).length !== 0) {
      /* do func */
    }
    const width = this.props.width - this.props.margin.left - this.props.margin.right;
    const height = this.props.height - this.props.margin.top - this.props.margin.bottom;

    const formatMonth = timeFormat('%B');
    const formatYear = timeFormat('%Y');
    const formatDate = timeFormat('%B %Y');
    const formatTemprature = format('.4r');
    const data = this.props.data.monthlyVariance.map((d) => {
      const time = new Date(d.year, d.month - 1);
      const variance = d.variance;
      return {
        temperature: this.props.data.baseTemperature + variance,
        time,
      };
    });

    const justNow = new Date();
    const months = timeMonth.every(1)
    .range(timeYear.floor(justNow), timeYear.ceil(justNow))
    .map(formatMonth);

    const svg = select(this.root).append('svg');
    svg.attr('viewBox', `0 0 ${this.props.width} ${this.props.height}`);
    svg.attr('preserveAspectRatio', 'xMidYMid meet');
    svg.classed('heat-map__chart', true);

    const colorScale = scaleSequential(interpolateSpectral)
    .domain(extent(data, d => d.temperature).reverse());

    const xScale = scaleTime()
    .range([1, width])
    .domain(extent(data, d => d.time))
    .nice(timeYear, 1);

    const xAxis = axisBottom()
    .scale(xScale)
    .tickFormat(formatYear);

    svg.append('g')
    .attr('class', 'heat-map__axis axis__x')
    .attr('transform', `translate(${this.props.margin.left},${height + this.props.margin.top})`)
    .call(xAxis);

    const yScale = scaleBand()
    .domain(months)
    .range([0, height])
    .paddingOuter([0])
    .paddingInner([0.05])
    .align([0]);

    const yAxis = axisLeft().scale(yScale);

    svg.append('g').attr('class', 'heat-map__axis axis__y')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .call(yAxis);

    const tiles = svg.append('g')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .selectAll('heat-map__bucket')
    .data(data)
    .enter()
    .append('rect')
    .classed('heat-map__bucket', true)
    .attr('x', d => xScale(timeYear.floor(d.time)))
    .attr('width', (d) => {
      const startOfYear = timeYear.floor(d.time);
      const nextYear = timeYear.offset(startOfYear, 1);
      const xStart = xScale(startOfYear);
      const xNext = xScale(nextYear);
      return xNext - xStart;
    })
    .attr('y', d => yScale(formatMonth(d.time)))
    .attr('height', yScale.bandwidth())
    .style('fill', d => colorScale(d.temperature));

    const tooltip = select(this.root).append('div')
    .classed('heat-map__tooltip', true)
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('display', 'none');

    tiles.on('mouseover', (d) => {
      const str = `<span>
      <p><time datetime=${d.time}></time>${formatDate(d.time)}<p>
      <p>Temperature: ${formatTemprature(d.temperature)}\u2103</p>
      </span>`;

      tooltip
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`)
      .html(str)
      .transition()
      .duration(100)
      .style('display', 'inherit')
      .style('opacity', 0.8);
    })
    .on('mouseout', () => {
      tooltip.transition()
      .duration(100)
      .style('opacity', 0)
      .style('display', 'none');
    });

  }
  render() {
    return (<div
      className="heat-map__container"
      ref={(c) => { this.root = c; }}
    />);
  }
}

// Width, height and margins

HeatMap.propTypes = {
  margin: shape({ top: number, right: number, bottom: number, left: number }),
  width: number,
  height: number,
  data: shape({
    baseTemperature: number.isRequired,
    monthlyVariance: array.isRequired,
  }).isRequired,
};

const phi = (1 + Math.sqrt(5)) / 2;
HeatMap.defaultProps = {
  width: 600 * phi,
  height: 600,
  margin: { top: 10, right: 30, bottom: 60, left: 80 },
};

export default HeatMap;
