// Toolbar.js

import { select } from 'd3-selection';
import { getSuperRegions } from './Data';

export default function createButtonToolbar() {
  getSuperRegions().then((superRegions) => {
    select('#buttonToolbar')
      .selectAll('button')
      .data(superRegions)
      .enter()
      .append('button')
      .text(superRegion => superRegion);
  });
}
