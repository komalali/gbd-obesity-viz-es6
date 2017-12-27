// InfoDiv.js

import { select } from 'd3-selection';
import getData from './Data';

export default function createInfoDiv(countryName) {
  getData().then((data) => {
    const blurb = data.countryObjects[countryName].blurb();
    const div = select('#countryInfo');

    div.html('');
    div.append('h1')
      .text(blurb[0]);
    div.append('p')
      .text(blurb[1]);
    div.append('p')
      .text(blurb[2]);
    div.append('p')
      .text(blurb[3]);
  });
}
