// Tooltip.js

import getData from './Data';

export default async function drawTooltip(location) {
  const data = await getData();
  if (location === 'Global') {
    console.log(data.globalObject);
  } else {
    console.log(data.countryObjects[location]);
  }
}
