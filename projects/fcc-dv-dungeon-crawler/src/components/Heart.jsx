import React, { PropTypes } from 'react';

const Heart = ({ size, percent, ...props }) => {
  /* Heart Shape */
  const w = size;
  const cr = (w * (2 - Math.SQRT2)) / 2;
  const a = Math.hypot(cr, cr);
  const rx = w / 2;
  const ry = cr - (a / 2);
  const h = Math.hypot(cr * 2, cr * 2) + ry;
  const vb = `0 0 ${w} ${h}`;
  const heartShapedPath = `M ${rx} ${h} L ${rx - a} ${h - a} A ${cr} ${cr} 0 1 1 ${rx} ${ry} A ${cr} ${cr} 0 1 1 ${rx + a} ${h - a} Z`;

  /* Massive semi-circle for background */
  const hcx = w / 2;
  const hcy = h / 2;
  const hr = w;
  const rad = (Math.PI * 2) * (percent / 100);
  const ax = hcx - (hr * Math.sin(rad));
  const ay = hcy - (hr * Math.cos(rad));
  const fp = `M ${hcx} ${hcy} v ${0 - hr} A ${hr} ${hr} 0 1 1 ${ax} ${ay} Z`;
  return (<svg {...props} viewBox={vb}>
    <defs>
      {/* Create the heart Shape */}
      <clipPath id="heart">
        <path d={heartShapedPath} />
      </clipPath>
    </defs>
    {/* fill and clip*/}
    <g clipPath="url(#heart)">
      <rect
        x="0" y="0"
        width="100%"
        height="100%"
        fill={(percent < 100) ? '#666' : 'red'}
      />
      <path fill="red" d={fp} />
    </g>
    {/* Out line */}
    <path
      d={heartShapedPath}
      fill="none"
      stroke="#999"
      strokeWidth="1"
    />
  </svg>);
};

Heart.propTypes = {
  size: PropTypes.number,
  percent: PropTypes.number,
};

Heart.defaultProps = {
  size: 32,
  percent: 100,
};

export default Heart;
