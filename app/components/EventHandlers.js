// EventHandlers.js

import { select, selectAll } from 'd3-selection';
import $ from 'jquery';
import getData from './Data';
import drawChart from './Chart';

export function redrawChart() {
  const dropdownSelection = $('.countrySelect').select2('data');
  let activeSuperRegions = selectAll('button.active').nodes();
  activeSuperRegions = activeSuperRegions.map(button => select(button).attr('data'));
  getData().then((data) => {
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
    drawChart(activeLocations);
  });
}

export function ButtonToggle() {
  select(this)
    .classed('active', !select(this).classed('active'));
  redrawChart();
}
