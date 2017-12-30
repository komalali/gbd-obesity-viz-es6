// Scales.js

import { max, min } from 'd3-array';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import config from './Constants';

export const xScale = scaleLinear().nice().range([0, config.adjustedWidth]);
export const yScale = scaleLinear().nice().range([config.adjustedHeight, 0]);
export const colorScale = scaleOrdinal().range(config.colors);

export default function createScales(locationList) {
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
  xScale.domain([dataRanges.yearsMin, dataRanges.yearsMax]);
  yScale.domain([0, dataRanges.meanMax + 0.02]);
}
