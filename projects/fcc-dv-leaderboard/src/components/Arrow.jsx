import React, { PropTypes } from 'react';

const Arrow = ({
  ascending,
  ...props
}) => (<svg {...props} viewBox="0 0 24 24">
  <path d={(ascending) ? 'M7 10l5 5 5-5z' : 'M7 14l5-5 5 5z'} />
  <path d="M0 0h24v24H0z" fill="none" />
</svg>);

Arrow.propTypes = {
  ascending: PropTypes.bool,
};

Arrow.defaultProps = {
  height: 24,
  width: 24,
  fill: '#000',
};
