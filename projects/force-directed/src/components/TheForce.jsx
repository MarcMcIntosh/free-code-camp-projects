import React, { Component } from 'react';
import { shape, arrayOf, string, number } from 'prop-types';
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
import { FLAG_IMG, FLAG_POS } from '../constants';

class TheForce extends Component {
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

    const svg = select(this.root)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .classed('force__graph', true);

    const defs = svg.append('defs')
    .selectAll('pattern')
    .data(FLAG_POS)
    .enter()
    .append('pattern')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('id', d => `flag__${d.cn}`);

    defs.append('image')
    .attr('xlink:href', FLAG_IMG)
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .attr('width', 272)
    .attr('height', 176);

    const links = svg.append('g')
    .attr('class', 'force__links')
    .selectAll('line')
    .data(this.props.data.links)
    .enter()
    .append('line')
    .attr('class', 'force__link');

    const simulation = forceSimulation()
    .force('link', forceLink())
    .force('charge', forceManyBody())
    .force('center', forceCenter(width / 2, height / 2))
    .force('y', forceY(0))
    .force('x', forceX(0));

    const drags = drag()
    .on('start', () => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    })
    .on('drag', () => {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    })
    .on('end', () => {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    });

    const nodes = svg.append('g')
   .attr('class', 'force__nodes')
   .selectAll('g')
   .data(this.props.data.nodes)
   .enter()
   .append('g')
   .call(drags);

    nodes.append('title').text(d => d.country);
    nodes.append('rect').attr('class', 'force__flag').attr('fill', d => `url(#flag__${d.code})`);

    const ticked = () => {
      links.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      // nodes.attr('x', d => d.x).attr('y', d => d.y);
      nodes.attr('transform', d => `translate(${d.x}, ${d.y})`);
    };

    simulation.nodes(this.props.data.nodes).on('tick', ticked);
    simulation.force('link').links(this.props.data.links);
  }

  render() {
    return (<div className="force__container" ref={(c) => { this.root = c; }} />);
  }
}

TheForce.propTypes = {
  data: shape({
    nodes: arrayOf(shape({ country: string, code: string })),
    links: arrayOf(shape({ target: number, source: number })),
  }).isRequired,
  margin: shape({
    top: number,
    right: number,
    bottom: number,
    left: number,
  }),
  width: number,
  height: number,
};

const phi = (1 + Math.sqrt(5)) / 2;
TheForce.defaultProps = {
  width: 600 * phi,
  height: 600,
  margin: { top: 10, left: 10, right: 10, bottom: 10 },
};

export default TheForce;
