import React, { Component } from 'react';
import { connect } from 'react-redux';
import { any } from 'prop-types';
import dataGlobe from '../data-globe';

const mapStateToProps = state => ({
  topology: state.topology,
});

const mapDispatchToProps = () => ({});

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }
  componentDidMount() {
    this.draw();
  }
  draw() {
    dataGlobe(this.root, this.props.topology);
  }
  render() {
    return (<div ref={(c) => { this.root = c; }} className="data-globe__container" />);
  }
}

GraphContainer.propTypes = { topology: any.isRequired };


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
