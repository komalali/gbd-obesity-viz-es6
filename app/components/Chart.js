// Chart.js

import { select } from 'd3-selection';
import config from './Constants';
import drawAxes from './Axis';
import drawLines from './Lines';
import createScales from './Scales';

function createSVG() {
  return select('#chart')
    .append('svg')
    .style('width', config.width)
    .style('height', config.height)
    .append('g')
    .attr('id', 'chart-content')
    .attr('transform', `translate(${config.margin.left * 1.5},${config.margin.top})`);
}

export default function drawChart(activeLocations) {
  const currentSVG = select('svg');
  if (currentSVG.size() === 0) {
    createSVG();
  }
  createScales(activeLocations);
  drawLines(activeLocations);
  drawAxes();
}
