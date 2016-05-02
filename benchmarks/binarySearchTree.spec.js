
// # Binary Search Tree tests
// TODO: finish this benchmark

'use strict';

var Needle = require('../src/needle.js');
var winston = require('winston');
winston.log('info', 'running speed tests on binary search tree');
var start, end, time, iterations, i;

var tree = new Needle.BinarySearchTree();