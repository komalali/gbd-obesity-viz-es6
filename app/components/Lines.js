// Lines.js

import { line, curveNatural } from 'd3-shape';
import { select } from 'd3-selection';
import { xScale, yScale } from './Constants';
import '../css/Lines.css';

const timeTrend = line()
  .x(datum => xScale(datum.year))
  .y(datum => yScale(datum.mean))
  .curve(curveNatural);

export default function drawLines(data) {
  const chart = select('#chart-content');

  Object.entries(data.countryObjects)
    .forEach((country) => {
      const countryData = country[1];
      chart.append('path')
        .classed('line', true)
        .attr('d', timeTrend(countryData.dataPoints));
    });
}
