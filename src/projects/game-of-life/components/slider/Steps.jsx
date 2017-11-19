import React from 'react';
import { number, func } from 'prop-types';

const Markers = ({
  length,
}, {
  classnames,
}) => (<div className={classnames('slider__track-marker-container')}>{Array.from({ length }, (d, i) => (<div key={i} className={classnames('slider__track-marker')} />))}
</div>);

Markers.propTypes = { length: number.isRequired };
Markers.contextTypes = { classnames: func.isRequired };

export default Markers;
