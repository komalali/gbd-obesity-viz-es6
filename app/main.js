// main.js

import createToolbar from './components/Toolbar';
import drawChart from './components/Chart';
import getData from './components/Data';

getData().then((data) => {
  createToolbar(data);
  drawChart([data.globalObject]);
});

