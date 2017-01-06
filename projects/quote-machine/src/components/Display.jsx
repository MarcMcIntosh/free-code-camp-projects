import React from 'react';

const Display = props => (
  <div className={props.classed}>Content</div>
);

Display.propTypes = {
  classed: React.PropTypes.string,
};

export default Display;
