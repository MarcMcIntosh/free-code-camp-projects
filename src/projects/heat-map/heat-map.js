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
const formatDate = timeFormat('%B, %Y');
const formatTemprature = format('.4r');

export default function heatMap(elem, obj, classnames) {
  const h = 600;
  const w = h * ((1 + Math.sqrt(5)) / 2);
  const margins = { top: 10, right: 30, bottom: 60, left: 80 };
  const width = w - (margins.left + margins.right);
  const height = h - (margins.top + margins.bottom);

  const data = obj.monthlyVariance.map((d) => {
    const time = new Date(d.year, d.month - 1);
    const variance = d.variance;
    return { temperature: obj.baseTemperature + variance, time };
  });

  const justNow = new Date();

  const months = timeMonth.every(1).range(timeYear.floor(justNow), timeYear.ceil(justNow)).map(formatMonth);

  const colorScale = scaleSequential(interpolateSpectral).domain(extent(data, d => d.temperature).reverse());

  const xScale = scaleTime().range([1, width]).domain(extent(data, d => d.time)).nice(timeYear, 1);

  const xAxis = axisBottom().scale(xScale).tickFormat(formatYear);

  const yScale = scaleBand().domain(months)
    .range([0, height])
    .paddingOuter([0])
    .paddingInner([0.05])
    .align([0]);

  const yAxis = axisLeft().scale(yScale);

  const bucketWidth = (d) => {
    const startOfYear = timeYear.floor(d.time);
    const nextYear = timeYear.offset(d.time, 1);
    const xStart = xScale(startOfYear);
    const xNext = xScale(nextYear);
    return xNext - xStart;
  };

  const tooltip = select(elem).append('div').attr('class', classnames('heat-map__tooltip'));

  const mouseEnter = (d) => {
    const str = `<p>
    <time datetime=${d.time}><b>${formatDate(d.time)}</b></time>
    <br /> Temperature: <b>${formatTemprature(d.temperature)}\u2103</b></p>`;
    tooltip
      .style('left', `${event.pageX}px`)
      .style('top', `${event.pageY}px`)
      .html(str)
      .transition()
      .duration(100)
      .style('display', 'inherit')
      .style('opacity', 0.8);
  };

  const mouseLeave = () => {
    tooltip.transition().duration(100).style('opacity', 0).style('display', 'none');
  };

  const svg = select(elem).append('svg')
    .attr('viewBox', `0 0 ${w} ${h}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('class', classnames('heat-map__chart'));

  svg.append('g')
    .attr('class', classnames('heat-map__axis', 'heat-map__axis--x'))
    .attr('transform', `translate(${margins.left}, ${height + margins.top})`)
    .call(xAxis);

  svg.append('g')
    .attr('class', classnames('heat-map__axis', 'heat-map__axis--y'))
    .attr('transform', `translate(${margins.left}, ${margins.top})`)
    .call(yAxis);

  svg.append('g')
    .attr('transform', `translate(${margins.left}, ${margins.top})`)
    .selectAll(classnames('heat-map__bucket'))
    .data(data)
    .enter()
    .append('rect')
    .on('mouseenter', mouseEnter)
    .on('mouseleave', mouseLeave)
    .attr('class', classnames('heat-map__bucket'))
    .attr('x', d => xScale(timeYear.floor(d.time)))
    .attr('width', bucketWidth)
    .attr('y', d => yScale(formatMonth(d.time)))
    .attr('height', yScale.bandwidth())
    .style('fill', d => colorScale(d.temperature));
}
