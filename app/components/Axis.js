// Axis.js

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { format } from 'd3-format';
import { select } from 'd3-selection';
import { xScale, yScale, config } from './Constants';
import '../css/Axis.css';

export default function createAxes() {
  const chart = select('#chart-content');
  const yearFormat = format('d');
  const percentFormat = format('.0%');

  const xAxis = axisBottom(xScale).tickFormat(yearFormat);
  const yAxisLeft = axisLeft(yScale).tickFormat(percentFormat);
  const yAxisRight = axisRight(yScale).tickFormat(percentFormat);

  // x-axis
  chart.append('g')
    .classed('axis', true)
    .attr('id', 'x-axis')
    .attr('transform', `translate(0,${config.adjustedHeight})`)
    .call(xAxis);

  // y-axis left
  chart.append('g')
    .classed('axis', true)
    .attr('id', 'y-axis-left')
    .call(yAxisLeft);

  // yScale-axis right
  chart.append('g')
    .classed('axis', true)
    .attr('id', 'y-axis-right')
    .attr('transform', `translate(${config.adjustedWidth},0)`)
    .call(yAxisRight);

  // x-axis title
  chart.append('text')
    .classed('axis-text', true)
    .attr('transform', `translate(-${config.margin.left},${config.adjustedHeight / 2})rotate(-90)`)
    .text('% Population that is Obese (BMI > 30)');

  // y-axis title
  chart.append('text')
    .classed('axis-text', true)
    .attr('transform', `translate(${config.adjustedWidth / 2},${config.adjustedHeight + config.margin.bottom})`)
    .text('Year');
}
