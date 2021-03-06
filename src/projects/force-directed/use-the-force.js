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

function getSizes(elem) {
  const { clientWidth, offsetTop } = elem;
  const padding = 16;
  const w = window.innerHeight;
  const e = document.documentElement.clientHeight;
  const h = e || w;
  const width = clientWidth - (padding * 2);
  const height = h - (offsetTop + (padding * 3));
  return [width, height];
}

export default function useTheForce(elem, data, flags, classnames) {
  const [width, height] = getSizes(elem);

  const svg = select(elem).append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('class', classnames('force-directed__graph'));


  const defs = svg.append('defs').selectAll('pattern')
    .data(flags).enter()
    .append('pattern')
    .attr('width', 16)
    .attr('height', 11)
    .attr('id', d => `flag__${d.code}`);

  defs.append('image')
    .attr('xlink:href', image)
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('width', 272)
    .attr('height', 176);

  const links = svg.append('g')
    .attr('class', classnames('force-directed__links'))
    .selectAll('line')
    .data(data.links)
    .enter()
    .append('line')
    .attr('class', classnames('force-directed__link'));

  const charge = forceManyBody();
  const center = forceCenter(width / 2, height / 2);

  const simulation = forceSimulation()
    .force('link', forceLink())
    .force('charge', charge)
    .force('center', center)
    .force('y', forceY(0))
    .force('x', forceX(0))
    .alphaTarget(1)
    ;

  const nodes = svg.append('g')
    .attr('class', classnames('force-directed__nodes'))
    .selectAll('g')
    .data(data.nodes)
    .enter()
    .append('g');

  nodes.append('title').text(d => d.country);
  nodes.append('rect').attr('class', classnames('force-directed__flag'))
    .attr('fill', d => `url(#flag__${d.code})`)
    .attr('width', 16)
    .attr('height', 11);

  const ticked = () => {
    links.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    nodes.attr('transform', d => `translate(${d.x}, ${d.y})`);
  };

  const dragStart = () => {
    if (!event.active) { simulation.alphaTarget(0.3).restart(); }
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  };
  const dragMove = () => {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  };
  const dragEnd = () => {
    if (!event.active) { simulation.alphaTarget(0); }
    event.subject.fx = null;
    event.subject.fy = null;
  };

  const drags = drag().on('start', dragStart).on('drag', dragMove).on('end', dragEnd);

  nodes.call(drags);
  simulation.nodes(this.props.data.nodes).on('tick', ticked);

  simulation.force('link').links(this.props.data.links);

  function resize() {
    const [w, h] = getSizes(elem);
    svg.attr('width', w).attr('height', h);
    svg.attr('viewBox', `0 0 ${w} ${h}`);
    simulation.force('center', forceCenter(w / 2, h / 2));
    simulation.restart();
  }

  window.addEventListener('resize', resize);
}
