// Axis.js

import { axisBottom, axisLeft, axisRight } from 'd3-axis';
import { transition } from 'd3-transition';
import { format } from 'd3-format';
import { select, selectAll } from 'd3-selection';
import config from './Constants';
import '../css/Axis.css';
import { xScale, yScale } from '.';

export default function () {
  const chart = select('#chart-content');
  const yearFormat = format('d');
  const percentFormat = format('.0%');
  const t = transition()
    .duration(750);

  const xAxis = axisBottom(xScale).tickFormat(yearFormat);
  const yAxisLeft = axisLeft(yScale).tickFormat(percentFormat);
  const yAxisRight = axisRight(yScale).tickFormat(percentFormat);

  // Drawing and updating axes
  if (selectAll('.axis').size() === 0) {
    // DRAW THE AXES FOR THE FIRST TIME

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
  } else {
    // UPDATE THE AXES IF THEY ALREADY EXIST

    // x-axis
    select('#x-axis')
      .transition(t)
      .attr('transform', `translate(0,${config.adjustedHeight})`)
      .call(xAxis);

    // y-axis left
    select('#y-axis-left')
      .transition(t)
      .call(yAxisLeft);

    // y-axis right
    select('#y-axis-right')
      .transition(t)
      .attr('transform', `translate(${config.adjustedWidth},0)`)
      .call(yAxisRight);
  }

  // Drawing and updating axis titles
  if (select('.axis-text').size() === 0) {
    // CREATE AXIS TITLES IF THEY DON'T ALREADY EXIST

    // x-axis title
    chart.append('text')
      .classed('axis-text', true)
      .attr('id', 'x-axis-text')
      .attr('transform', `translate(${config.adjustedWidth / 2},${config.adjustedHeight + config.margin.bottom})`)
      .text('Year');
    // y-axis title
    chart.append('text')
      .classed('axis-text', true)
      .attr('id', 'y-axis-text')
      .attr('transform', `translate(-${config.margin.left},${config.adjustedHeight / 2})rotate(-90)`)
      .text('% Population that is Obese (BMI > 30)');
  } else {
    // UPDATE POSITION OF AXIS TITLES

    // x-axis title
    select('#x-axis-text')
      .transition(t)
      .attr('transform', `translate(${config.adjustedWidth / 2},${config.adjustedHeight + config.margin.bottom})`);
    // y-axis title
    select('#y-axis-text')
      .transition(t)
      .attr('transform', `translate(-${config.margin.left},${config.adjustedHeight / 2})rotate(-90)`);
  }
}
