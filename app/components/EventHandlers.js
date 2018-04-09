// EventHandlers.js

import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import $ from 'jquery';
import { getData, drawChart, drawTooltip, colorScale } from '.';

function updateActiveLocations(data) {
  const dropdownSelection = $('.countrySelect').select2('data');
  let activeSuperRegions = selectAll('button.active').nodes();
  activeSuperRegions = activeSuperRegions.map(button => select(button).attr('data'));
  const activeLocations = [];
  activeLocations.push(data.globalObject);
  dropdownSelection.forEach((location) => {
    activeLocations.push(data.countryObjects[location.id]);
  });
  if (activeSuperRegions.length > 0) {
    Object.entries(data.countryObjects).forEach((country) => {
      const countryObject = country[1];
      if (activeSuperRegions.includes(countryObject.superRegion)) {
        activeLocations.push(countryObject);
      }
    });
  }
  return activeLocations;
}

export async function redrawChart() {
  const data = await getData();
  const activeLocations = updateActiveLocations(data);
  drawChart(activeLocations);
}

export function buttonToggle() {
  const currentlyActive = select(this).classed('active');
  const superRegion = select(this).attr('data');
  const currentButtonColor = currentlyActive ? 'white' : colorScale(superRegion);
  const currentOutlineColor = currentlyActive ? colorScale(superRegion) : 'white';

  const t = transition()
    .duration(750);

  select(this)
    .classed('active', !currentlyActive)
    .transition(t)
    .style('background-color', currentButtonColor)
    .style('color', currentOutlineColor)
    .style('border', `1px solid ${currentOutlineColor}`);

  redrawChart();
}

export function showTooltip() {
  const location = select(this).attr('data');
  drawTooltip(location);
}
