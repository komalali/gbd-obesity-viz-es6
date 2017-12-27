// Data.js

import { csv } from 'd3-fetch';
import { max, extent } from 'd3-array';
import { DataPoint, Country } from './Locations';

function createDataObject(data) {
  const dataObject = {
    countryObjects: {},
    get superRegions() {
      const superRegionArray = [];
      data.forEach((row) => {
        if (!superRegionArray.includes(row.super_region_name)) {
          superRegionArray.push(row.super_region_name);
        }
      });
      return superRegionArray.sort();
    },

    get countries() {
      const countryArray = [];
      data.forEach((row) => {
        if (!countryArray.includes(row.location_name)) {
          countryArray.push(row.location_name);
        }
      });
      return countryArray.sort();
    },

    get yearsMinMax() {
      return extent(data, datum => +datum.year);
    },

    get meanMax() {
      return max(data, datum => +datum.mean);
    },
  };

  data.forEach((datum) => {
    if (!dataObject.countryObjects[datum.location_name]) {
      dataObject.countryObjects[datum.location_name] = new Country(
        datum.location_name,
        datum.location,
        datum.region_name,
        datum.super_region_name,
      );
    }

    const point = new DataPoint(datum.year, datum.mean, datum.global_rank, datum.super_region_rank);
    dataObject.countryObjects[datum.location_name].addDataPoint(point);
  });

  return dataObject;
}

export default function getData() {
  return csv('data/data.csv').then(data => createDataObject(data));
}
