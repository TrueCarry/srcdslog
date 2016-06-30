'use strict';
var fs = require('fs');

module.exports = fs.readdirSync('./lib/Messages/')
  .filter((name) => name.indexOf('index.js') == -1)
  .map((name) => require('./' + name));
