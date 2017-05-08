import React, { PureComponent } from 'react';
import { number, shape, array } from 'prop-types';
import { select, event } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { format } from 'd3-format';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeYear } from 'd3-time';
import {
  scaleSequential,
  // scaleTime,
  scaleBand,
  scaleLinear,
} from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { extent } from 'd3-array';
// import { timeYear } from 'd3-time';
import 'd3-transition';
import { MONTHS } from '../constants';

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

    const width = this.props.width - this.props.margin.left - this.props.margin.right;
    const height = this.props.height - this.props.margin.top - this.props.margin.bottom;

    const svg = select(this.root).append('svg');
    svg.attr('viewBox', `0 0 ${this.props.width} ${this.props.height}`);
    svg.attr('preserveAspectRatio', 'xMidYMid meet');
    svg.classed('heat-map__chart', true);

    const formatMonth = timeFormat('%B');

    const months = [...Array(12)].map((d, i) => {
      const date = new Date();
      date.setMonth(i);
      return formatMonth(date);
    });

    const colorScale = scaleSequential(interpolateSpectral)
    .domain(extent(this.props.data.monthlyVariance, d => d.variance).reverse());

    const xScale = scaleLinear()
    .rangeRound([0, width])
    .domain(extent(this.props.data.monthlyVariance, d => d.year));

    const xAxis = axisBottom().scale(xScale).tickFormat(format('d'));
    svg.append('g')
    .attr('class', 'heat-map__axis axis__x')
    .attr('transform', `translate(${this.props.margin.left},${height + this.props.margin.top})`)
    .call(xAxis);

    const yScale = scaleBand()
    .domain(months)
    .range([0, height])
    .padding([0.1])
    .align([0]);

    const yAxis = axisLeft().scale(yScale);

    svg.append('g').attr('class', 'heat-map__axis axis__y')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .call(yAxis);

    svg.append('g')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .selectAll('heat-map__bucket')
    .data(this.props.data.monthlyVariance)
    .enter()
    .append('rect')
    .classed('heat-map__bucket', true)
    .attr('x', d => xScale(d.year))
    .attr('width', d => xScale(d.year + 1) - xScale(d.year))
    .attr('y', d => yScale(months[d.month]))
    .attr('height', yScale.bandwidth())
    .style('fill', d => colorScale(d.variance));

/*
    const data = this.props.data.monthlyVariance;
    const baseTemp = this.props.data.baseTemperature;
    const yearData = data.map(d => d.year).reduce((a, b) => {
      if (a.indexOf(b) > 0) { return a; }
      return a.concat(b);
    }, []);
    const yearMinMax = extent(yearData);

    const axisYLabel = { x: 65, y: this.props.height / 2 };
    const axisXLabel = { x: this.props.width / 2, y: height + (this.props.margin.bottom / 1.5) };
    const legendWidth = 35;
    const grid = {
      height: height / MONTHS.length,
      width: width / yearData.length,
    };

    const colorScale = scaleSequential(interpolateSpectral)
    .domain(extent(data, d => d.variance).reverse());

    const xScale = scaleLinear()
    .range([0, width])
    .domain(extent(data, d => d.year))
    .nice()
    ;

    const xAxis = axisBottom().scale(xScale).tickFormat(format('d'));

    svg.append('g')
    .attr('class', 'heat-map__axis axis__x')
    .attr('transform', `translate(${this.props.margin.left},${height + this.props.margin.top})`)
    .call(xAxis);

    const yScale = scaleBand().domain(MONTHS).range([0, height]).padding([0.1])
    .align([0]);

    const yAxis = axisLeft().scale(yScale);

    svg.append('g').attr('class', 'heat-map__axis axis__y')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .call(yAxis);

    const temps = svg.append('g')
    .attr('transform', `translate(${this.props.margin.left}, ${this.props.margin.top})`)
    .selectAll('heat-map__bucket')
    .data(data)
    .enter()
    .append('rect')
    .classed('heat-map__bucket', true)
    .attr('x', d => xScale(d.year))
    .attr('width', d => xScale(d.year + 1) - xScale(d.year))
    .attr('y', d => yScale(MONTHS[d.month]))
    .attr('height', yScale.bandwidth())
    .style('fill', d => colorScale(d.variance));

    const tooltip = select(this.root).append('div')
    .attr('class', 'heat-map__tooltip')
    .style('opacity', 0);

    temps.on('mouseover', (d) => {
      let str = `<span>${MONTHS[d.month]} - ${d.year}</span><br />`;
      str += `<span>${Math.floor((d.variance + baseTemp) * 1000) / 1000} &#8451</span><br />`;
      str += `<span>${d.variance} &#8451</span>`;

      tooltip.transition().duration(100)
      .style('opacity', 0.8);
      tooltip.html(str)
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`);
    });
    */
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
