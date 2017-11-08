import { format } from 'd3-format';
import { scaleLinear, scaleTime } from 'd3-scale';
import { extent, max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { select, event } from 'd3-selection';
import { timeParse, timeFormat } from 'd3-time-format';
import 'd3-transition';

function draw(elem, arr, classnames) {
  /* data formats */
  const parseTime = timeParse('%Y-%m-%d');
  const formatTime = timeFormat('%B, %Y');
  const formatToolTip = n => format('$,.4s')(n).replace('T', ' trillion').replace('G', ' billion');
  const formatCurrency = n => format('$,.2s')(n).replace('T', ' T ');
  const data = arr.slice().map(d => [parseTime(d[0]), +d[1] * 1e9]);

  /* Graph sizes */
  const phi = (1 + Math.sqrt(5)) / 2;
  const h = 600;
  const w = h * phi;
  const margins = { top: 10, right: 30, bottom: 30, left: 75 };
  const width = w - margins.left - margins.right;
  const height = h - margins.top - margins.bottom;
  // const barWidth = Math.floor(width / data.length);
  const barWidth = (width / data.length) / 2;

  /* Axis scales */
  const xScale = scaleTime().range([0, width]).domain(extent(data, d => d[0]));

  const yScale = scaleLinear().rangeRound([height, 0]).domain([0, max(data, d => d[1])]);

  /* Axis formats */
  const xAxis = axisBottom(xScale).ticks(5);
  const yAxis = axisLeft(yScale).tickFormat(formatCurrency);

  /* Tool-tip */

  const toolTip = select(elem).append('div').attr('class', classnames('bar-chart__tooltip'));

  /* SVG element */
  const svg = select(elem).append('svg');
  svg.attr('class', classnames('bar-chart__graph'));
  svg.attr('viewBox', `0 0 ${w} ${h}`);
  svg.attr('preserveAspectRatio', 'xMidYMid meet');

  /* Graph element */
  const g = svg.append('g').attr('transform', `translate(${margins.left},${margins.top})`);

  g.append('g')
    .attr('class', classnames('bar-chart__axis'))
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  g.append('g')
    .attr('class', classnames('bar-chart__axis'))
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 8)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Gross Domestic Product, USA');

  const barClassName = classnames('bar-chart__bar');

  g.selectAll(barClassName).data(data)
    .enter().append('rect')
    .attr('class', barClassName)
    .attr('x', d => xScale(d[0]))
    .attr('y', d => yScale(d[1]))
    .attr('width', barWidth)
    .attr('height', d => height - yScale(d[1]))
    .on('mouseover', (d) => {
      const dollars = d[1];
      const time = d[0];
      toolTip.transition().duration(200).style('opacity', 0.9);
      toolTip.html(`<div>${formatToolTip(dollars)}</div><div>${formatTime(time)}</div>`);
      const ttWidth = toolTip.property('clientWidth') + 5;
      const left = (event.pageX + ttWidth > width) ? (event.pageX - ttWidth) : event.pageX + 5;
      toolTip.style('left', left + 'px');

      const ttHeight = toolTip.property('clientHeight') + 5;
      const top = event.pageY - ttHeight;
      toolTip.style('top', top + 'px');
    })
    .on('mouseout', () => {
      toolTip.transition().duration(500).style('opacity', 0);
    });
}

export default draw;
