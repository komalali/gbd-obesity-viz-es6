// Chart.js

import { select } from 'd3-selection';
import config from './Config';
import createAxes from './Axis';

function createSVG() {
  return select('#chart')
    .append('svg')
    .style('width', config.width)
    .style('height', config.height)
    .append('g')
    .attr('id', 'chart-content')
    .attr('transform', `translate(${config.margin.left * 1.5},${config.margin.top})`);
}

export default function drawChart() {
  createSVG();
  createAxes();
}
