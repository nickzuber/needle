
// # Hashmap tests

'use strict';

var Needle = require('../src');
var winston = require('winston');
winston.log('info', 'running speed tests on hashmap');
var start, end, time, iterations, i;

var map = new Needle.Hashmap();

// Determine the amount of times to execute each function for speed testing
iterations = 1000000;



/** @benchmark
 * put
 * Inserting all unique entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  map.put("item: " + i, "value: " + i);
}

end = new Date().getTime();
time = end - start;

winston.info("Hashmap.put() " + iterations.toLocaleString() + " (create) iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * put
 * Updating all entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  map.put("item: " + i, "a new value: " + i);
}

end = new Date().getTime();
time = end - start;

winston.info("Hashmap.put() " + iterations.toLocaleString() + " (update) iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * get
 * Retrieve all entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  map.get("item: " + i);
}

end = new Date().getTime();
time = end - start;

winston.info("Hashmap.get() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * iterator / next
 * Iterate over all entries
 */

start = new Date().getTime();

i = map.iterator();
while(i !== null){
  i = map.next();
}

end = new Date().getTime();
time = end - start;

winston.info("Hashmap.next() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");



/** @benchmark
 * delete
 * Delete all entries
 */

start = new Date().getTime();

for(i=0; i<iterations; ++i){
  map.delete("item: " + i);
}

end = new Date().getTime();
time = end - start;

winston.info("Hashmap.delete() " + iterations.toLocaleString() + " iterations took " + (end-start)/1000 + " seconds to execute.");
