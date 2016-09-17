
// # Stack tests

'use strict';

var Needle = require('../src');
var winston = require('winston');
winston.log('info', 'running speed tests on stack');
var start, end, time, iterations, i;

var stack = new Needle.Stack();

// Determine the amount of times to execute each function for speed testing
iterations = 1000000;



/** @benchmark
 * push
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  stack.push("item: " + i);
}

end = new Date().getTime();
time = end - start;

winston.info("Stack.push() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * peek
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  stack.peek();
}

end = new Date().getTime();
time = end - start;

winston.info("Stack.peek() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * pop
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  stack.pop();
}

end = new Date().getTime();
time = end - start;

winston.info("Stack.pop() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");