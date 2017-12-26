// Locations.js

import { format } from 'd3-format';

const round = format('.1f');

const rankPhrasing = (earlyYearRank, lateYearRank) => {
  switch (true) {
    case lateYearRank > earlyYearRank:
      return `(down from #${earlyYearRank} in 1990)`;
    case lateYearRank < earlyYearRank:
      return `(up from #${earlyYearRank} in 1990)`;
    default:
      return '(same rank as in 1990)';
  }
};

export class DataPoint {
  constructor(year, mean, globalRank, superRegionRank) {
    this._year = +year;
    this._mean = +round(+mean * 100);
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

export class Country {
  constructor(name, iso3, region, superRegion) {
    this._name = name;
    this._iso3 = iso3;
    this._region = region;
    this._superRegion = superRegion;
    this._dataPoints = {};
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
    this._dataPoints[dataPoint.year] = dataPoint;
  }

  relativeChangeText() {
    const mean2013 = this.dataPoints['2013'].mean;
    const mean1990 = this.dataPoints['1990'].mean;
    const relativeChange = round(((mean2013 - mean1990) * 100) / mean1990);
    const changeDirection = mean2013 > mean1990 ? 'increased' : 'decreased';

    return `In 1990, ${mean1990}% of the population of ${this.name} was obese. By 2013, this number had ${changeDirection} to ${mean2013}%, a relative change of ${relativeChange}%.`;
  }

  differenceFromGlobalText() {
    const percentDifferenceFromGlobal = round(this.dataPoints['2013'].mean - 12);
    const changeDirection = percentDifferenceFromGlobal > 0 ? 'higher' : 'lower';
    if (percentDifferenceFromGlobal < 0) {
      Math.abs(percentDifferenceFromGlobal);
    }

    return `In 2013, ${this.name} had a prevalence of ${percentDifferenceFromGlobal}% ${changeDirection} than the global average of 12%.`;
  }

  rankChangeText() {
    const globalRank1990 = this.dataPoints['1990'].globalRank;
    const globalRank2013 = this.dataPoints['2013'].globalRank;
    const superRegionRank1990 = this.dataPoints['1990'].superRegionRank;
    const superRegionRank2013 = this.dataPoints['2013'].superRegionRank;

    return `In 2013, ${this.name} ranked in at #${globalRank2013} most obese country globally, ${rankPhrasing(globalRank1990, globalRank2013)}, and #${superRegionRank2013} in the ${this.superRegion} super region ${rankPhrasing(superRegionRank1990, superRegionRank2013)}.`;
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
