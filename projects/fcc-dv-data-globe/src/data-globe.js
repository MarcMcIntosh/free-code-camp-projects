import { select } from 'd3-selection';
import { feature } from 'topojson-client';
import {
  geoPath,
  geoMercator,
} from 'd3-geo';

export default function (elem, topology) {
  const w = topology.bbox.slice(0, 2).reduce((a, b) => a + Math.abs(b), 0);
  const h = topology.bbox.slice(2, 4).reduce((a, b) => a + Math.abs(b), 0);
  const countries = feature(topology, topology.objects.countries); // .features;
  const projection = geoMercator().fitSize([w, h], countries);
  /* const projection = geoMercator()
  .scale((height - 3) / (2 * Math.PI))
  .translate([width / 2, height / 2])
  .precision(0.1);
  */
  // const path = geoPath().projection(projection);


  const svg = select(elem).append('svg')
  .attr('class', 'data-globe')
  .attr('viewBox', `0, 0, ${w}, ${h}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');
/*
  const path = svg.append('path');
  path.datum(countries).attr('d', geoPath().projection(projection));
*/
  const path = geoPath().projection(projection); svg.selectAll('path')
  .data(countries.features)
  .enter()
  .append('path')
  .attr('class', 'data-globe__country')
  .attr('d', path);

  
}
