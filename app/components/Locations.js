// Locations.js

import { format } from 'd3-format';

const round = format('.1f');

const rankPhrasing = (earlyYearRank, lateYearRank) => {
  switch (true) {
    case lateYearRank > earlyYearRank:
      return `(down from #${earlyYearRank} in 1980)`;
    case lateYearRank < earlyYearRank:
      return `(up from #${earlyYearRank} in 1980)`;
    default:
      return '(same rank as in 1980)';
  }
};

export class DataPoint {
  constructor(year, mean, globalRank, superRegionRank) {
    this._year = +year;
    this._mean = +mean;
    this._globalRank = Math.floor(+globalRank);
    this._superRegionRank = Math.floor(+superRegionRank);
  }

  get year() {
    return this._year;
  }

  get mean() {
    return this._mean;
  }

  get globalRank() {
    return this._globalRank;
  }

  get superRegionRank() {
    return this._superRegionRank;
  }
}

export class Location {
  constructor(name, iso3, region, superRegion) {
    this._name = name;
    this._iso3 = iso3;
    this._region = region;
    this._superRegion = superRegion;
    this._dataPoints = [];
  }

  get name() {
    return this._name;
  }

  get iso3() {
    return this._iso3;
  }

  get region() {
    return this._region;
  }

  get superRegion() {
    return this._superRegion;
  }

  get dataPoints() {
    return this._dataPoints;
  }

  addDataPoint(dataPoint) {
    this._dataPoints.push(dataPoint);
  }

  relativeChangeText() {
    const mean2016 = this.dataPoints[36].mean;
    const mean1980 = this.dataPoints[0].mean;
    const relativeChange = round(((mean2016 - mean1980) * 100) / mean1980);
    const changeDirection = mean2016 > mean1980 ? 'increased' : 'decreased';

    return `In 1980, ${mean1980 * 100}% of the population of ${this.name} was obese. By 2016, this number had ${changeDirection} to ${mean2016 * 100}%, a relative change of ${relativeChange}%.`;
  }

  differenceFromGlobalText() {
    let percentDifferenceFromGlobal = round((this.dataPoints[36].mean - 0.14) * 100);
    const changeDirection = percentDifferenceFromGlobal > 0 ? 'higher' : 'lower';
    if (percentDifferenceFromGlobal < 0) {
      percentDifferenceFromGlobal = Math.abs(percentDifferenceFromGlobal);
    }

    return `In 2016, ${this.name} had a prevalence of ${percentDifferenceFromGlobal}% ${changeDirection} than the global average of 14%.`;
  }

  rankChangeText() {
    const globalRank1980 = this.dataPoints[0].globalRank;
    const globalRank2016 = this.dataPoints[36].globalRank;
    const superRegionRank1980 = this.dataPoints[0].superRegionRank;
    const superRegionRank2016 = this.dataPoints[36].superRegionRank;

    return `In 2016, ${this.name} ranked in at #${globalRank2016} most obese country globally, ${rankPhrasing(globalRank1980, globalRank2016)}, and #${superRegionRank2016} in the ${this.superRegion} super region ${rankPhrasing(superRegionRank1980, superRegionRank2016)}.`;
  }

  blurb() {
    return [
      this.name,
      this.relativeChangeText(),
      this.differenceFromGlobalText(),
      this.rankChangeText(),
    ];
  }
}
