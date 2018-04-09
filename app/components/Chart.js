// Chart.js

import { select, selectAll } from 'd3-selection';
import config from './Constants';
import { createScales, drawLines, drawAxes, showTooltip } from '.';

function createSVG() {
  return select('#chart')
    .append('svg')
    .style('width', config.width)
    .style('height', config.height)
    .append('g')
    .attr('id', 'chart-content')
    .attr('transform', `translate(${config.margin.left * 1.5},${config.margin.top})`);
}

export default function (activeLocations) {
  const currentSVG = select('svg');
  if (currentSVG.size() === 0) {
    createSVG();
  } else {
    currentSVG
      .style('width', config.width)
      .style('height', config.height);
  }
  createScales(activeLocations);
  drawLines(activeLocations);
  drawAxes();

  selectAll('.line')
    .on('mouseenter', showTooltip);
}
