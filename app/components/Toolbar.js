// Toolbar.js

import { select } from 'd3-selection';
import getData from './Data';

function createButtonToolbar(data) {
  select('#buttonToolbar')
    .selectAll('button')
    .data(data.superRegions)
    .enter()
    .append('button')
    .text(superRegion => superRegion);
}

function createDropdown(data) {
  select('#countryDropdown')
    .selectAll('#countryOption')
    .data(data.countries)
    .enter()
    .append('option')
    .attr('id', 'countryOption')
    .text(country => country)
    .attr('value', country => country);
}

export default function createToolbar() {
  getData().then((data) => {
    createButtonToolbar(data);
    createDropdown(data);
  });
}
