import { select, event } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleLinear, scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { extent } from 'd3-array';
import 'd3-transition';
import { formatData } from './utils';

const color = scaleOrdinal(schemeCategory10);

const phi = (1 + Math.sqrt(5)) / 2;
const defaultOpts = {
  width: 600 * phi,
  height: 600,
  margins: { top: 10, right: 30, bottom: 60, left: 80 },
};

export default function scatterplot(elem, arr, opts = defaultOpts) {
  const data = formatData(arr);

  const svg = select(elem).append('svg')
    .classed('scatterplot__graph', true)
    .attr('viewBox', `0 0 ${opts.width} ${opts.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const width = opts.width - (opts.margins.left + opts.margins.right);
  const height = opts.height - (opts.margins.top + opts.margins.bottom);
  const xScale = scaleLinear().rangeRound([
    0,
    width,
  ]).domain(extent(data, d => d.behind).reverse());
  const xAxis = axisBottom().scale(xScale);

  const yScale = scaleLinear().range([
    0,
    height,
  ]).domain([0, data.length + 1]);
  // .domain(extent(data, d => d.position));
  const yAxis = axisLeft().scale(yScale);

  const g = svg.append('g').attr('transform', `translate(${opts.margins.left},${opts.margins.top})`);

  g.append('g').attr('class', 'scatterplot__axis')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis);

  g.append('g').attr('class', 'scatterplot__axis')
    .call(yAxis);

  const tooltip = select(elem).append('div')
    .attr('class', 'scatterplot__tooltip')
    .style('opacity', 0);

  const circle = g.selectAll('circle').data(data)
    .enter().append('circle')
    .attr('cx', d => xScale(d.behind))
    .attr('cy', d => yScale(d.position))
    .attr('r', 5)
    .style('fill', d => ((d.doping === '') ? color('No doping allegations') : color('Riders with doping allegations')));

  circle.on('mouseover', (d) => {
    // console.log('moused');
    let str = `<span>${d.name}</span></br>${d.time}</br>${d.year}</br>${d.nationality}</br>`;
    if (d.doping === '') {
      str += 'No doping allegations';
    } else {
      str += d.doping;
    }
    tooltip.transition().duration(200).style('opacity', 0.9);
    tooltip.html(str).style('left', `${event.pageX + 5}px`).style('top', `${event.pageY - 50}px`);
  });

  circle.on('mouseout', () => {
    tooltip.transition().duration(500).style('opacity', 0);
  });

  const legend = svg.selectAll('.scatterplot__legend')
    .data(color.domain()).enter()
    .append('g')
    .attr('class', 'scatterplot__legend')
    .attr('transform', (d, i) => `translate(0,${i * 20})`);

  legend.append('rect')
    .attr('x', width - 18)
    .attr('y', height / 2)
    .attr('width', 18)
    .attr('height', 18)
    .style('fill', color);

  legend.append('text')
    .attr('x', width - 24)
    .attr('y', (height / 2) + 9)
    .attr('dy', '.35em')
    .style('text-anchor', 'end')
    .text(d => d);
}
