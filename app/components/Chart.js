// Chart.js

import { select } from 'd3-selection';
import { config, xScale, yScale } from './Constants';
import drawAxes from './Axis';
import drawLines from './Lines';
import getData from './Data';

function createScales(data) {
  xScale.domain(data.yearsMinMax);
  yScale.domain([0, data.meanMax]);
}

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

  getData().then((data) => {
    createScales(data);
    drawLines(data);
    drawAxes();
  });
}
