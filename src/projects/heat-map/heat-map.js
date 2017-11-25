import { select, event } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { extent } from 'd3-array';
import { format } from 'd3-format';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeYear, timeMonth } from 'd3-time';
import { scaleSequential, scaleTime, scaleBand } from 'd3-scale';
import 'd3-transition';

const formatMonth = timeFormat('%B');
const formatYear = timeFormat('%Y');
const formatDate = timeFormat('%B %Y');
const formatTemprature = format('.4r');

const phi = (1 + Math.sqrt(5)) / 2;
const DEFAULT_OPTS = {
  width: 600 * phi,
  height: 600,
  margins: { top: 10, right: 30, bottom: 60, left: 80 },
};


export default function heatMap(elem, obj, opts = DEFAULT_OPTS) {
  const width = opts.width - (opts.margins.left + opts.margins.right);
  const height = opts.height - (opts.margins.top + opts.margins.bottom);

  const data = obj.monthlyVariance.map((d) => {
    const time = new Date(d.year, d.month - 1);
    const variance = d.variance;
    return { temperature: obj.baseTemperature + variance, time };
  });

  const justNow = new Date();

  const months = timeMonth.every(1).range(timeYear.floor(justNow), timeYear.ceil(justNow)).map(formatMonth);

  const svg = select(elem).append('svg');
  svg.attr('viewBox', `0 0 ${opts.width} ${opts.height}`);
  svg.attr('preserveAspectRatio', 'xMidYMid meet');
  svg.classed('heat-map__chart', true);

  const colorScale = scaleSequential(interpolateSpectral).domain(extent(data, d => d.temperature).reverse());

  const xScale = scaleTime().range([1, width]).domain(extent(data, d => d.time)).nice(timeYear, 1);

  const xAxis = axisBottom().scale(xScale).tickFormat(formatYear);

  svg.append('g')
    .attr('class', 'heat-map__axis axis__x')
    .attr('transform', `translate(${opts.margin.left},${height + opts.margin.top})`)
    .call(xAxis);

  const yScale = scaleBand()
    .domain(months)
    .range([0, height])
    .paddingOuter([0])
    .paddingInner([0.05])
    .align([0]);

  const yAxis = axisLeft().scale(yScale);

  svg.append('g')
    .attr('class', 'heat-map__axis axis__y')
    .attr('transform', `translate(${opts.margin.left}, ${opts.margin.top})`)
    .call(yAxis);

  const tiles = svg.append('g')
    .attr('transform', `translate(${opts.margin.left}, ${opts.margin.top})`)
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

  const tooltip = select(elem).append('div')
    .classed('heat-map__tooltip', true)
    .style('opacity', 0)
    .style('position', 'absolute')
    .style('display', 'none');

  tiles.on('mouseover', (d) => {
    const str = `<span><p><time datetime=${d.time}></time>${formatDate(d.time)}</p><p>Temperature: ${formatTemprature(d.temperature)}\u2103</p></span>`;

    tooltip
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`)
      .html(str)
      .transition()
      .duration(100)
      .style('display', 'inherit')
      .style('opacity', 0.8);
  }).on('mouseout', () => {
    tooltip.transition().duration(100).style('opacity', 0).style('display', 'none');
  });
}
