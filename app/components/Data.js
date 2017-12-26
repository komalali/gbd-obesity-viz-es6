// Data.js

import { csv } from 'd3-fetch';
import { DataPoint, Country } from './Locations';

function createDataObject(data) {
  const dataObject = {};
  data.forEach((datum) => {
    if (!dataObject[datum.location_name]) {
      dataObject[datum.location_name] = new Country(
        datum.location_name,
        datum.location,
        datum.region_name,
        datum.super_region_name,
      );
    }

    const point = new DataPoint(datum.year, datum.mean, datum.global_rank, datum.super_region_rank);
    dataObject[datum.location_name].addDataPoint(point);
  });
  return dataObject;
}

function createSuperRegionArray(dataObject) {
  const superRegionArray = [];
  Object.entries(dataObject).forEach((country) => {
    const countryObject = country[1];
    if (!superRegionArray.includes(countryObject.superRegion)) {
      superRegionArray.push(countryObject.superRegion);
    }
  });
  return superRegionArray.sort();
}

export default function getData() {
  return csv('data/data.csv').then(data => createDataObject(data));
}

export function getSuperRegions() {
  return getData().then(data => createSuperRegionArray(data));
}
