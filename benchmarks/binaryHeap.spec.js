
// # Binary Heap tests
// TODO: finish this benchmark

'use strict';

var Needle = require('../src/needle.js');
var winston = require('winston');
winston.log('info', 'running speed tests on binary heap');
var start, end, time, iterations, i;

var heap = new Needle.BinaryHeap();