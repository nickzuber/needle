
// # Queue tests
// TODO: finish this benchmark

'use strict';

var Needle = require('../src');
var winston = require('winston');
winston.log('info', 'running speed tests on queue');
var start, end, time, iterations, i;

var queue = new Needle.Queue();