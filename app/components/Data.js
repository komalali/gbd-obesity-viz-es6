// Data.js

import { csv } from 'd3-fetch';
import { DataPoint, Location } from './Locations';

function createDataObject(data) {
  const dataObject = {
    globalObject: new Location('Global', 'G', '', ''),
    countryObjects: {},
    get superRegions() {
      const superRegionArray = [];
      data.forEach((row) => {
        if (row.location_name !== 'Global') {
          if (!superRegionArray.includes(row.super_region_name)) {
            superRegionArray.push(row.super_region_name);
          }
        }
      });
      return superRegionArray.sort();
    },

    get countries() {
      const countryArray = [];
      data.forEach((row) => {
        if (row.location_name !== 'Global') {
          if (!countryArray.includes(row.location_name)) {
            countryArray.push(row.location_name);
          }
        }
      });
      return countryArray.sort();
    },
  };

  data.forEach((datum) => {
    const point = new DataPoint(datum.year, datum.mean, datum.global_rank, datum.super_region_rank);
    if (datum.location_name === 'Global') {
      dataObject.globalObject.addDataPoint(point);
    } else {
      if (!dataObject.countryObjects[datum.location_name]) {
        dataObject.countryObjects[datum.location_name] = new Location(
          datum.location_name,
          datum.iso3,
          datum.region_name,
          datum.super_region_name,
        );
      }
      dataObject.countryObjects[datum.location_name].addDataPoint(point);
    }
  });
  return dataObject;
}

export default function () {
  return csv('data/obesity_by_country_2016.csv').then(data => createDataObject(data));
}
