import { select } from 'd3-selection';
import { feature } from 'topojson-client';
import { extent, mean } from 'd3-array';
import {
  scaleSequential,
  interpolateRainbow,
  scalePow,
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

  const minMaxYear = extent(meteorites.features, d => Date.parse(d.properties.year));
  const colorScale = scaleSequential(interpolateRainbow)
  .domain(minMaxYear);

  const averageMass = mean(meteorites.features, d => +d.properties.mass);
  const minMaxMass = extent(meteorites.features, d => +d.properties.mass);
  const sizeScale = scalePow().domain(minMaxMass)
  .range(h * 0.01, h * 0.05)
  .exponent(1)
  .nice(718750 / 2 / 2);

  const svg = select(elem).append('svg')
  .attr('class', 'data-globe')
  .attr('viewBox', `0, 0, ${w}, ${h}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');
/*
  const path = svg.append('path');
  path.datum(countries).attr('d', geoPath().projection(projection));
*/
  const path = geoPath().projection(projection); svg.append('g').attr('class', 'data-globe__map')
  .selectAll('path')
  .data(countries.features)
  .enter()
  .append('path')
  .attr('class', 'data-globe__country')
  .attr('d', path);

  svg.append('g').attr('class', 'data-globe__strikes')
  .selectAll('circle')
  .data(meteorites.features)
  .append('circle')
  .attr('cx', d => projection([d.properties.reclong, d.properties.reclat])[0])
  .attr('cy', d => projection([d.properties.reclong, d.properties.reclat])[1])
  .attr('r', d => sizeScale(d.properties.mass))
  .attr('fill', d => colorScale(Date.parse(d.properties.year)))
  .attr('fill-opacity', d => ((d.properties.mass <= averageMass) ? 1 : 0.5));
}
