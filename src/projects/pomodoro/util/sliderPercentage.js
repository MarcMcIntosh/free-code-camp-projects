
// const number = n => ((n === null) ? NaN : +n);

/* intrval = (max - min) / step;
const percentageSteps = (interval = 1) => Array.from({
  length: Math.max(0, Math.ceil(100 / interval))| 0,
}, (d, i) => i * interval).concat(100);
*/

/* for callculating where the thumb should go  using percent of range relative width */
/* intreval = (max - min) / step; */
/* use convert value to an index in the array */
/* precentage = (value - min) / (max - min) */
/* array index = percentage * interval |0 */
/*
const percentageSteps = (interval = 1) => Array.from({
  length: Math.max(0, Math.ceil(100 / interval)) | 0,
}, (d, i) => i * interval).concat(100);
*/

const percentageSteps = (range, interval) => Array.from({
  length: 1 + Math.max(0, Math.ceil(range / interval)) | 0,
}, (d, i) => (100 / range) * (i * interval));
// const max = 50;
const max = 30;
// const min = 1;
const min = 15;
const value = 25;

const step = 3;
const range = max - min;
const r = range % step;

const arr = percentageSteps(range - r, step);
// const interval = (step > 2) ? ((max - min) / step) : step;
// const per = ((value - min) / (range - r)) * 100;
const id = ((value - min) / step) | 0;

const res = arr[id];
console.log(arr.join(', '));
console.log({ id, res, step, range, array: arr.length });
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
