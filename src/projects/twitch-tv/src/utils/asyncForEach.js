export default function asnycForEach(arr, cb) {
  return arr.forEach(setTimeout(cb(), 0));
}
