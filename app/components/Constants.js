// Constants.js

import { scaleLinear } from 'd3-scale';

export const config = {
  margin: {
    top: 20,
    right: 50,
    bottom: 30,
    left: 35,
  },
  height: 400,
  width: 900,
  get adjustedHeight() { return this.height - this.margin.top - this.margin.bottom; },
  get adjustedWidth() { return this.width - this.margin.right - this.margin.left; },
};

export const xScale = scaleLinear().nice().range([0, config.adjustedWidth]);
export const yScale = scaleLinear().nice().range([config.adjustedHeight, 0]);
