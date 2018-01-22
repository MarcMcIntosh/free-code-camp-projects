export default function prefix(value) {
  const re = /^(ht|f)tps?:\/\//;
  if (!value) { return value; }
  return re.test(value) ? value : `http://${value}`;
}
