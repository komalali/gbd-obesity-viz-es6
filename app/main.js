// main.js

import $ from 'jquery';
import { getData, createToolbar, drawChart, redrawChart } from './components';

async function createPage() {
  const data = await getData();
  createToolbar(data);
  drawChart([data.globalObject]);
}

createPage();

$(window).on('resize', redrawChart);
