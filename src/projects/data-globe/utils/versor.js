/* eslint no-mixed-operators: "off" */
/* taken from https://bl.ocks.org/mbostock/7ea1dde508cec6d2d95306f92642bc42 */
const { acos, asin, atan2, cos, max, min, PI, sin, sqrt } = Math;
const radians = PI / 180;
const degrees = 180 / PI;

export const cross = (v0, v1) => ([
  v0[1] * v1[2] - v0[2] * v1[1],
  v0[2] * v1[0] - v0[0] * v1[2],
  v0[0] * v1[1] - v0[1] * v1[0],
]);

export const dot = (v0, v1) => v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];


// Returns the unit quaternion for the given Euler rotation angles [λ, φ, γ].
export default function versor(e) {
  const l = e[0] / 2 * radians;
  const sl = sin(l);
  const cl = cos(l); // λ / 2
  const p = e[1] / 2 * radians;
  const sp = sin(p);
  const cp = cos(p); // φ / 2
  const g = e[2] / 2 * radians;
  const sg = sin(g);
  const cg = cos(g); // γ / 2
  return [
    cl * cp * cg + sl * sp * sg,
    sl * cp * cg - cl * sp * sg,
    cl * sp * cg + sl * cp * sg,
    cl * cp * sg - sl * sp * cg,
  ];
}

// Returns Cartesian coordinates [x, y, z] given spherical coordinates [λ, φ].
export const cartesian = (e) => {
  const l = e[0] * radians;
  const p = e[1] * radians;
  const cp = cos(p);
  return [cp * cos(l), cp * sin(l), sin(p)];
};

// Returns the Euler rotation angles [λ, φ, γ] for the given quaternion.
export const rotation = q => ([
  atan2(2 * (q[0] * q[1] + q[2] * q[3]), 1 - 2 * (q[1] * q[1] + q[2] * q[2])) * degrees,
  asin(max(-1, min(1, 2 * (q[0] * q[2] - q[3] * q[1])))) * degrees,
  atan2(2 * (q[0] * q[3] + q[1] * q[2]), 1 - 2 * (q[2] * q[2] + q[3] * q[3])) * degrees,
]);

// Returns the quaternion to rotate between two cartesian points on the sphere.
export const delta = (v0, v1) => {
  const w = cross(v0, v1);
  const l = sqrt(dot(w, w));
  if (!l) return [1, 0, 0, 0];
  const t = acos(max(-1, min(1, dot(v0, v1)))) / 2;
  const s = sin(t); // t = θ / 2
  return [cos(t), w[2] / l * s, -w[1] / l * s, w[0] / l * s];
};

// Returns the quaternion that represents q0 * q1.
export const multiply = (q0, q1) => ([
  q0[0] * q1[0] - q0[1] * q1[1] - q0[2] * q1[2] - q0[3] * q1[3],
  q0[0] * q1[1] + q0[1] * q1[0] + q0[2] * q1[3] - q0[3] * q1[2],
  q0[0] * q1[2] - q0[1] * q1[3] + q0[2] * q1[0] + q0[3] * q1[1],
  q0[0] * q1[3] + q0[1] * q1[2] - q0[2] * q1[1] + q0[3] * q1[0],
]);
