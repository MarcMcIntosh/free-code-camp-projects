import { select, event } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
// import { timeParse } from 'd3-time-format';
import { scaleLinear, scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { extent } from 'd3-array';
import 'd3-transition';
// import { formatData } from './utils';

// const parseTime = timeParse('%M:%S');
// const formatTime = timeFormat('%M:%S');
/*
function formatData(data) {
  const bestTime = data.map(d => d.Seconds).reduce((a, b) => Math.min(a, b));
  return data.map(d => ({
    behind: Math.abs(d.Seconds - bestTime),
    position: d.Place,
    name: d.Name,
    year: d.Year,
    time: parseTime(d.Time),
    nationality: d.Nationality,
    doping: d.Doping,
    url: d.URL,
  }));
}
*/
const color = scaleOrdinal(schemeCategory10);

export default function scatterplot(elem, data, classnames) {
  // const data = formatData(data);
  const phi = (1 + Math.sqrt(5)) / 2;
  const w = 600 * phi;
  const h = 600;
  const margins = { top: 10, right: 30, bottom: 60, left: 80 };
  const svg = select(elem).append('svg')
    .attr('class', classnames('scatterplot__graph'))
    .attr('viewBox', `0 0 ${w} ${h}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const width = w - (margins.left + margins.right);
  const height = h - (margins.top + margins.bottom);
  // const xScale = scaleLinear().rangeRound([0, width]).domain(extent(data, d => d.behind).reverse());
  const xScale = scaleLinear().rangeRound([0, width]).domain(extent(data, d => d.Seconds).reverse());
  const xAxis = axisBottom().scale(xScale);

  // const yScale = scaleLinear().range([0, height]).domain([0, data.length + 1]);
  // .domain(extent(data, d => d.position));
  const yScale = scaleLinear().range([0, height]).domain(extent(data, d => d.Place));
  const yAxis = axisLeft().scale(yScale);

  const g = svg.append('g').attr('transform', `translate(${margins.left},${margins.top})`);

  g.append('g').attr('class', classnames('scatterplot__axis')).attr('transform', `translate(0,${height})`).call(xAxis);

  g.append('g').attr('class', classnames('scatterplot__axis')).call(yAxis);

  const tooltip = select(elem).append('div').attr('class', classnames('scatterplot__tooltip')).style('opacity', 0);

  const circle = g.selectAll('circle').data(data)
    .enter().append('circle')
    .attr('cx', d => xScale(d.Seconds))
    .attr('cy', d => yScale(d.Place))
    .attr('r', 5)
    .style('fill', d => ((d.Doping === '') ? color('No doping allegations') : color('Riders with doping allegations')));

  circle.on('mouseover', (d) => {
    // console.log('moused');
    let str = `<span>${d.Name}</span></br>${d.Time}</br>${d.Year}</br>${d.Nationality}</br>`;
    if (d.Doping === '') {
      str += 'No doping allegations';
    } else {
      str += d.Doping;
    }
    tooltip.transition().duration(200).style('opacity', 0.9);
    tooltip.html(str).style('left', `${event.pageX + 5}px`).style('top', `${event.pageY - 50}px`);
  });

  circle.on('mouseout', () => {
    tooltip.transition().duration(500).style('opacity', 0);
  });

  const legend = svg.selectAll(classnames('.scatterplot__legend'))
    .data(color.domain()).enter()
    .append('g')
    .attr('class', classnames('scatterplot__legend'))
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
