import React, { PureComponent } from 'react';
import { number, shape, arrayOf, string } from 'prop-types';
import { feature } from 'topojson-client';
import { select } from 'd3-selection';
import { scaleSequential, interpolateRainbow } from 'd3-scale';
import {
  geoMercator,
  geoPath,
} from 'd3-geo';

const projection = (x, y) => geoMercator()
.scale((x - 3) / (2 * Math.PI))
.translate([x / 2, y / 2])
.precision(0.1);

const path = d => geoPath().projection(d);

const countries = d => feature(d, d.objects.countries).features;

class DataGlobe extends PureComponent {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.projection = projection(this.props.width, this.props.height);
    this.path = path(this.projection);
    this.countries = countries(this.props.topojson);
  }
  componentDidMount() {
    this.draw();
  }
  componentDidUpdate() {
    this.draw();
  }
  draw() {
    const svg = select(this.root).append('svg')
    .attr('class', 'data-globe__graph')
    .attr('viewBox', `0, 0, ${this.props.width}, ${this.props.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

    svg.selectAll('path').data(this.countries).enter()
    .append('path')
    .attr('class', 'data-globe__country')
    .attr('d', this.path);
  }
  render() {
    return (<div className="data-globe__container" ref={(c) => { this.root = c; }} />);
  }
}

const phi = (1 + Math.sqrt(5)) / 2;
const height = 1000;
const width = height * phi;


const arcs = arrayOf(arrayOf(number.isRequired).isRequired);
const countriesShape = shape({
  geometries: arrayOf(
    shape({
      arcs,
      id: string.isRequired,
      type: string.isRequired,
    }).isRequired,
  ).isRequired,
  type: string.isRequired,
});


const topojson = shape({
  arcs: arrayOf(arrayOf(arcs.isRequired).isRequired).isRequired,
  bbox: arrayOf(number.isRequired).isRequired,
  objects: shape({
    countries: countriesShape.isRequired,
    land: countriesShape.isRequired,
  }).isRequired,
  transform: shape({
    scale: arrayOf(number.isRequired).isRequired,
    translate: arrayOf(number.isRequired).isRequired,
  }).isRequired,
  type: string.isRequired,
});

DataGlobe.propTypes = {
  width: number,
  height: number,
  topojson: topojson.isRequired,
};


DataGlobe.defaultProps = { width, height };

export default DataGlobe;
