
// # Rolling Hash tests

'use strict';

var Needle = require('../src/needle.js');
var LONG_TEXT = require('./long_text.js');
var start, end, time, iterations, i;

var rh = new Needle.RollingHash(256);

// Determine the amount of times to execute each function for speed testing
iterations = 1000000;



/** @benchmark
 * slide [append, skip]
 * This will run in O(n) because rehashing runs in O(1) and 
 */

start = new Date().getTime();

var needle = "_END_";

var found = false;
var hashedNeedle = rh.hash(needle);
rh.set(LONG_TEXT.substr(0, needle.length));

for(var i=0; i<LONG_TEXT.length-needle.length; ++i){
  var t = LONG_TEXT.substr(i+1, needle.length);
  var attempt = rh.slide(LONG_TEXT[i], LONG_TEXT[i+needle.length]);
  if(attempt === hashedNeedle){
    var loc = LONG_TEXT.substr(i+1, needle.length);
    if(needle === loc){
      found = true;
      break;
    }
  }
}

if(found){
  console.warn("Item was successfully found.");
}else{
  console.warn("Warning: Item was not found.");
}

end = new Date().getTime();
time = end - start;

console.warn("RollingHash.slide() rolled over " + LONG_TEXT.length.toLocaleString() + " characters in " + (end-start)/1000 + " seconds.");

/** @sample
 * This will run in O(n * m) where m relates to the amount of time it takes to rehash in a traditional approach.
 * This should take roughly twice the time as our rolling hash. 
 */

start = new Date().getTime();

for(var i=0; i<LONG_TEXT.length-needle.length; ++i){
  var attempt = LONG_TEXT.substr(i+1, needle.length);
    if(hashedNeedle === rh.hash(attempt)){
      if(needle === attempt){
        found = true;
        break;
      }
    }
}

end = new Date().getTime();
time = end - start;

console.warn("Traditional substring locator searched through " + LONG_TEXT.length.toLocaleString() + " characters in " + (end-start)/1000 + " seconds.");