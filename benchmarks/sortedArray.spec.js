
// # Sorted Array tests

'use strict';

var Needle = require('../src/needle.js');
var start, end, time, iterations, i;

var arr = new Needle.SortedArray();

// Determine the amount of times to execute each function for speed testing
iterations = 500000;



/** @benchmark
 * insert
 * Inserting all unique entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  var rand = Math.floor(Math.random() * iterations + 1);
  arr.insert(rand);
}

end = new Date().getTime();
time = end - start;

console.warn("SortedArray.insert() " + iterations.toLocaleString() + " (create) iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * get
 * Retrieve all entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  var rand = Math.floor(Math.random() * arr.size());
  arr.get(rand);
}

end = new Date().getTime();
time = end - start;

console.warn("SortedArray.get() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * delete
 * deleting all entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  var rand = Math.floor(Math.random() * 10 + 1);
  var mid = Math.floor(arr.size() / rand);
  arr.delete(mid);
}

end = new Date().getTime();
time = end - start;

console.warn("SortedArray.delete() " + iterations.toLocaleString() + " (update) iterations took " + (end-start)/1000 + " seconds to execute.");