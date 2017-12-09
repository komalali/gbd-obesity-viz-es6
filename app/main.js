// main.js
import { select } from 'd3-selection';

const app = (name) => {
  select('body')
    .append('h1')
    .text(`Hello, ${name}!`);
};

app('Komal');
