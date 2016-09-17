
// # Rolling Hash tests

'use strict';

var Needle = require('../src');
var LONG_TEXT = require('./long_text.js');
var winston = require('winston');
winston.log('info', 'running speed tests on rolling hash');
var start, end, time, iterations, i;

var rh = new Needle.RollingHash(256);

// Determine the amount of times to execute each function for speed testing
iterations = 1000000;



/** @benchmark
 * slide [append, skip]
 * This will run in O(n) because rehashing runs in O(1) and 
 */

start = new Date().getTime();

var needle = "A REALLING BIG WINDOW TO SERACH FOR BUT THE LENGTH OF STRING LENGTH WON'T HINDER PERFORMANCE FOR ROLLING HASH";

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
  winston.info("Item was successfully found.");
}else{
  winston.info("Warning: Item was not found. If this was not intentional, then something is wrong with the rolling hash.");
}

end = new Date().getTime();
time = end - start;

winston.info("RollingHash.slide() rolled over " + LONG_TEXT.length.toLocaleString() + " characters in " + (end-start)/1000 + " seconds.");



/** @sample
 * This will run incredibly fast (even faster than the rolling hash) probably because a string is a primitive type in javascript,
 * therefore the language is able to compare them at an extremely low level with very high performance
 */

start = new Date().getTime();

for(var i=0; i<LONG_TEXT.length-needle.length; ++i){
  var attempt = new String(LONG_TEXT.substr(i+1, needle.length));
    if(needle === attempt){
      found = true;
      break;
    }
}

end = new Date().getTime();
time = end - start;

winston.info("Brute string matching searched through " + LONG_TEXT.length.toLocaleString() + " characters in " + (end-start)/1000 + " seconds.");


/** @sample
 * This will run in O(n * m) where m relates to the amount of time it takes to rehash in a traditional approach.
 * This should take much longer than the rolling hash DEPENDING on how large the window we're searching in is, because
 * if the window is big then the rehashing will take longer in the traditional approach (but will not affect the speed of the
 * rolling hash)
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

winston.info("Traditional substring locator searched through " + LONG_TEXT.length.toLocaleString() + " characters in " + (end-start)/1000 + " seconds.");