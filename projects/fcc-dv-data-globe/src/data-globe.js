import { select } from 'd3-selection';
import { feature } from 'topojson-client';
import { extent } from 'd3-array';
import {
  scaleSequential,
  interpolateRainbow,
  scaleLinear,
} from 'd3-scale';
import {
  geoPath,
  geoMercator,
} from 'd3-geo';

export default function (elem, topology, meteorites) {
  const w = topology.bbox.slice(0, 2).reduce((a, b) => a + Math.abs(b), 0);
  const h = topology.bbox.slice(2, 4).reduce((a, b) => a + Math.abs(b), 0);
  const countries = feature(topology, topology.objects.countries); // .features;
  const projection = geoMercator().fitSize([w, h], countries);
  const colorScale = scaleSequential(interpolateRainbow);
  const minMaxMass = extent(meteorites.features, d => +d.properties.mass);
  const sizeScale = scaleLinear().domain(minMaxMass)
  .rangeRound([h / 150, h / 15]).nice();
  const fillScale = scaleLinear()
  .domain(minMaxMass)
  .range([0.7, 0.4])
  .nice(500);

  const svg = select(elem).append('svg')
  .attr('class', 'data-globe')
  .attr('viewBox', `0, 0, ${w}, ${h}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');

  const path = geoPath().projection(projection); svg.append('g').attr('class', 'data-globe__map')
  .selectAll('path')
  .data(countries.features)
  .enter()
  .append('path')
  .attr('class', 'data-globe__country')
  .attr('d', path);

  const meteor = svg.append('g').attr('class', 'data-globe__strikes')
  .selectAll('g')
  .data(meteorites.features)
  .enter()
  .append('g')
  .attr('class', 'data-globe__meteorite')
  .attr('transform', (d) => {
    const coords = [d.properties.reclong, d.properties.reclat];
    return `translate(${projection(coords)})`;
  });

  meteor.append('title').text(d => d.properties.name);
  meteor.append('circle')
  .attr('r', d => sizeScale(+d.properties.mass))
  .attr('fill', () => colorScale(Math.random()))
  .attr('fill-opacity', d => fillScale(+d.properties.mass));
}
