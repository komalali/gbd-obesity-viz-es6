// Lines.js

import { transition } from 'd3-transition';
import { line, curveBasis } from 'd3-shape';
import { select, selectAll } from 'd3-selection';
import { xScale, yScale, colorScale } from '.';
import '../css/Lines.css';

const timeTrend = line()
  .x(datum => xScale(datum.year))
  .y(datum => yScale(datum.mean))
  .curve(curveBasis);

function drawLine(location) {
  const chart = select('#chart-content');
  const lineColor = colorScale(location.superRegion);
  const t = transition()
    .duration(750);
  const currentLine = select(`[data="${location.name}"`);

  if (currentLine.size() > 0) {
    currentLine
      .transition(t)
      .attr('d', timeTrend(location.dataPoints));
  } else {
    chart
      .append('path')
      .classed('line', true)
      .attr('data', location.name)
      .attr('d', timeTrend(location.dataPoints))
      .style('opacity', 0)
      .transition(t)
      .style('opacity', 0.7)
      .style('stroke', lineColor);
  }
}

function remove(array, item) {
  const itemIndex = array.indexOf(item);
  array.splice(itemIndex, 1);
}

export default function (locationList) {
  let allCurrentLines = selectAll('.line').nodes();
  allCurrentLines = allCurrentLines.map(countryLine => select(countryLine).attr('data'));
  locationList.forEach((location) => {
    drawLine(location);
    remove(allCurrentLines, location.name);
  });
  allCurrentLines.forEach((location) => {
    select(`[data="${location}"]`).remove();
  });
}
