// Scales.js

import { max, min } from 'd3-array';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import config from './Constants';

export const xScale = scaleLinear().nice();
export const yScale = scaleLinear().nice();
export const colorScale = scaleOrdinal().range(config.colors);

export default function (locationList) {
  const dataRanges = {
    yearsMin: Infinity,
    yearsMax: -Infinity,
    meanMax: -Infinity,
  };
  locationList.forEach((location) => {
    const tempYearMin = min(location.dataPoints, dataPoint => dataPoint.year);
    const tempYearMax = max(location.dataPoints, dataPoint => dataPoint.year);
    const tempMeanMax = max(location.dataPoints, dataPoint => dataPoint.mean);

    if (tempYearMin < dataRanges.yearsMin) {
      dataRanges.yearsMin = tempYearMin;
    }
    if (tempYearMax > dataRanges.yearsMax) {
      dataRanges.yearsMax = tempYearMax;
    }
    if (tempMeanMax > dataRanges.meanMax) {
      dataRanges.meanMax = tempMeanMax;
    }
  });
  xScale
    .range([0, config.adjustedWidth])
    .domain([dataRanges.yearsMin, dataRanges.yearsMax]);
  yScale
    .domain([0, dataRanges.meanMax + 0.02])
    .range([config.adjustedHeight, 0]);
}
