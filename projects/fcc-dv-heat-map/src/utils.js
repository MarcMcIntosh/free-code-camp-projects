import { timeFormat } from 'd3-time-format';
import { scaleOrdinal, schemeCategory20 } from 'd3-scale';

export const formatYear = timeFormat('%Y');
export const formatMonth = timeFormat('%B');
export const colors = scaleOrdinal(schemeCategory20);

export function formatData(obj) {
  const base = obj.baseTemperature;
  return obj.monthlyVariance.map((d) => {
    const temperature = base + d.variance;
    const time = new Date(d.year, d.month);
    return { time, temperature };
  });
}
