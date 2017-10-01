import { select, event } from 'd3-selection';
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceY,
  forceX,
} from 'd3-force';
import { drag } from 'd3-drag';
import image from './styles/images/flags.png';

export default function useTheForce(elem, data, flags) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const DEFAULT = { width: 600 * phi, height: 600, margins: { top: 10, left: 10, right: 10, bottom: 10 } };
  const width = DEFAULT.width - (DEFAULT.margin.left + DEFAULT.margin.right);
  const height = DEFAULT.height - (DEFAULT.margin.top + DEFAULT.margin.bottom);

  const svg = select(elem).append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('class', 'force__graph');

  const defs = svg.append('defs').selectAll('pattern')
    .data(flags).enter()
    .append('pattern')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('id', d => `flag__${d.cn}`);

  defs.append('image')
    .attr('xlink:href', image)
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('width', 272)
    .attr('height', 176);

  const links = svg.append('g')
    .attr('class', 'force__links')
    .selectAll('line')
    .data(data.links)
    .enter()
    .append('line')
    .attr('class', 'force__link');

  const simulation = forceSimulation()
    .force('link', forceLink())
    .force('charge', forceManyBody())
    .force('center', forceCenter(width / 2, height / 2))
    .force('y', forceY(0))
    .force('x', forceX(0));

  const drags = drag().on('start', () => {
    if (!event.active) {
      simulation.alphaTarget(0.3).restart();
    }
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }).on('drag', () => {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }).on('end', () => {
    if (!event.active) {
      simulation.alphaTarget(0);
    }
    event.subject.fx = null;
    event.subject.fy = null;
  });

  const nodes = svg.append('g')
    .attr('class', 'force__nodes')
    .selectAll('g')
    .data(data.nodes)
    .enter()
    .append('g')
    .call(drags);

  nodes.append('title').text(d => d.country);
  nodes.append('rect').attr('class', 'force__flag').attr('fill', d => `url(#flag__${d.code})`);

  const ticked = () => {
    links.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    nodes.attr('transform', d => `translate(${d.x}, ${d.y})`);
  };

  simulation.nodes(this.props.data.nodes).on('tick', ticked);

  simulation.force('link').links(this.props.data.links);
}
