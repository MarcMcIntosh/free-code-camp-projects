/* elsint-disable */
/* percent of range relative width */
const percentageSteps = (range, interval) => Array.from({
  length: 1 + Math.max(0, Math.ceil(range / interval)) | 0,
}, (d, i) => (100 / range) * (i * interval));


/* That array could be used for placing display markers */
const trackWidth = ({ value, min, max, step }) => {
  const r0 = max - min;
  const r1 = r0 % step;
  const range = r0 - r1;
  const pos = (value - min) / step | 0;
  const arr = percentageSteps(range, step);
  return arr[pos];
};

/*
const vals = ({ min, max, step }) => {
  // min should be 0%
  // max should be 100%
  // and the
  const r = (max - min);
};

export default function(values, p, valueof) {
  if (valueof == null) valueof = number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
*/
