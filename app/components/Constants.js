// Constants.js
import $ from 'jquery';

const config = {
  margin: {
    top: 20,
    right: 50,
    bottom: 30,
    left: 35,
  },
  colors: ['rgba(27,158,119,0.9)', 'rgba(217,95,2,0.9)', 'rgba(117,112,179,0.9)', 'rgba(231,41,138,0.9)', 'rgba(70,130,180,0.9)', 'rgba(230,171,2,0.9)', 'rgba(166,118,29,0.9)', 'rgba(0,0,0,1)'],
  get height() { return $(window).innerHeight() - 150; },
  get width() { return $(window).innerWidth() - 30; },
  get adjustedHeight() { return this.height - this.margin.top - this.margin.bottom; },
  get adjustedWidth() { return this.width - this.margin.right - this.margin.left; },
};

export default config;

