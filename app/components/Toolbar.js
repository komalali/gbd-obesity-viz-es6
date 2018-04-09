// Toolbar.js

import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';
import { select } from 'd3-selection';
import { colorScale, buttonToggle, redrawChart } from '.';
import '../css/Toolbar.css';

function createButtonToolbar(data) {
  data.superRegions.forEach((superRegion) => {
    const button = select('#buttonToolbar')
      .append('button')
      .attr('data', superRegion)
      .text(superRegion)
      .on('click', buttonToggle);

    button.style('background-color', 'white')
      .style('border', `1px solid ${colorScale(superRegion)}`)
      .style('color', colorScale(superRegion));
  });
}

function createDropdown(data) {
  select('#countryDropdown')
    .selectAll('#countryOption')
    .data(data.countries)
    .enter()
    .append('option')
    .text(country => country)
    .attr('value', country => country);

  $('.countrySelect')
    .select2({
      placeholder: 'Pick a country',
      width: '80%',
      allowClear: true,
    })
    .on('change', redrawChart)
    .on('select2:unselect', (event) => {
      if (!event.params.originalEvent) {
        return;
      }
      event.params.originalEvent.stopPropagation();
    });
}

export default function createToolbar(data) {
  createButtonToolbar(data);
  createDropdown(data);
}
