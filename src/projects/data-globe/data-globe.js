import { select, event, mouse } from 'd3-selection';
import { feature } from 'topojson-client';
import { extent } from 'd3-array';
import { scaleSequential, interpolateRainbow, scaleLinear } from 'd3-scale';
import { geoPath, geoGraticule10, geoOrthographic } from 'd3-geo';
import { zoom } from 'd3-zoom';
import { drag } from 'd3-drag';
import 'd3-transition';
import versor, { cartesian, multiply, delta, rotation } from './utils/versor';

export default function (elem, topology, meteorites, classnames) {
  const w = topology.bbox.slice(0, 2).reduce((a, b) => a + Math.abs(b), 0);
  const h = topology.bbox.slice(2, 4).reduce((a, b) => a + Math.abs(b), 0);
  const countries = feature(topology, topology.objects.countries);

  const colorScale = scaleSequential(interpolateRainbow);

  const minMaxMass = extent(meteorites.features, d => +d.properties.mass);

  const sizeScale = scaleLinear().domain(minMaxMass).rangeRound([h / 300, h / 15]).nice();

  const fillScale = scaleLinear().domain(minMaxMass.map(sizeScale)).range([0.65, 0.35]);

  const projection = geoOrthographic()
    .scale((h - 10) / 2)
    .translate([w / 2, h / 2])
    .precision(0.1);

  const path = geoPath().projection(projection);
  path.pointRadius(d => ((d.properties && d.properties.mass) ? sizeScale(+d.properties.mass) : 4.5));

  const svg = select(elem).append('svg')
    .attr('class', 'data-globe__graph')
    .attr('viewBox', `0, 0, ${w}, ${h}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const g = svg.append('g');

  g.append('path')
    .datum(geoGraticule10())
    .attr('class', classnames('data-globe__graticule'))
    .attr('d', path);

  g.append('g').attr('class', classnames('data-globe__map'))
    .selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', classnames('data-globe__country'))
    .attr('d', path);

  g.append('g').attr('class', classnames('data-globe__strikes'))
    .selectAll('path')
    .data(meteorites.features)
    .enter()
    .append('path')
    .attr('class', classnames('data-globe__meteorite'))
    .attr('fill', () => colorScale(Math.random()))
    .attr('fill-opacity', d => fillScale(sizeScale(+d.properties.mass)))
    .attr('d', path)
    .append('title')
    .text(d => d.properties.name);

  let v0; let r0; let q0;
  function dragstarted() {
    const arr = mouse(this);
    v0 = cartesian(projection.invert(arr));
    r0 = projection.rotate();
    q0 = versor(r0);
  }

  function dragged() {
    const arr = mouse(this);
    const v1 = cartesian(projection.rotate(r0).invert(arr));
    const q1 = multiply(q0, delta(v0, v1));
    const r1 = rotation(q1);
    projection.rotate(r1);
    path.projection(projection);
    g.selectAll('path').attr('d', path);
  }

  svg.call(drag().on('start', dragstarted).on('drag', dragged));

  svg.call(zoom().on('zoom', () => {
    g.attr('transform', event.transform);
  }));
}
