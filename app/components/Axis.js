// Axis.js

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { format } from 'd3-format';
import config from './Config';
import getData from './Data';

export default function createAxes() {
  const yearFormat = format('d');
  const percentFormat = format('.0%');

  const x = scaleLinear().nice()
    .range([0, config.adjustedWidth]);
  const y = scaleLinear().nice()
    .range([config.adjustedHeight, 0]);

  const xAxis = axisBottom(x).tickFormat(yearFormat);
  const yAxisLeft = axisLeft(y).tickFormat(percentFormat);
  const yAxisRight = axisRight(y).tickFormat(percentFormat);

  getData().then(() => {
    const xDomain = [1990, 2013];
    const yDomain = [0, 0.7];

    x.domain(xDomain);
    y.domain(yDomain);

    const chart = select('#chart-content');

    chart.append('g')
      .classed('x-axis', true)
      .attr('transform', `translate(0,${config.adjustedHeight})`)
      .call(xAxis);

    // y-axis left
    chart.append('g')
      .classed('y-axis-left', true)
      .call(yAxisLeft);

    // y-axis right
    chart.append('g')
      .classed('y-axis-right', true)
      .attr('transform', `translate(${config.adjustedWidth},0)`)
      .call(yAxisRight);
  });
}
