'use strict';

const fs = require('graceful-fs');
const yaml = require('js-yaml');

module.exports = yaml.load(fs.readFileSync('./config.yml'));