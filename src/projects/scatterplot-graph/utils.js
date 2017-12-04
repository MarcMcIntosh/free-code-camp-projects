import { timeParse, timeFormat } from 'd3-time-format';

export const parseTime = timeParse('%M:%S');
export const formatTime = timeFormat('%M:%S');

export function behindRange(arr) {
  const behind = arr.map(d => d.behind);
  const max = Math.max(...behind);
  const min = Math.min(...behind);
  return [Math.ceil(max / 100) * 100, min];
}

export function formatData(arr) {
  const bestTime = arr.map(d => d.Seconds).reduce((a, b) => Math.min(a, b));
  return arr.map(d => ({
    behind: Math.abs(d.Seconds - bestTime),
    position: d.Place,
    name: d.Name,
    year: d.Year,
    time: parseTime(d.Time),
    nationality: d.Nationality,
    doping: d.Doping,
    url: d.URL,
  }));
}
