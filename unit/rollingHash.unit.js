
// # Hashmap tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Rolling Hash should run without errors', function(t){

  var rh = new Needle.RollingHash(256);

  var haystack = "This is a sentence and we are going to search for a word in here.";

  // slide [append, skip] and set [append]
  try{
    // The substring to find
    var needle = "word";
    var hashedNeedle = rh.hash(needle);

    // Set the window to the start of the haystack
    rh.set(haystack.substr(0, needle.length));

    var found = false;

    // Roll through the haystack
    for(var i=0; i<haystack.length-needle.length; ++i){
      // RollingHash.slide() will slide the window and return the new hash value
      var attempt = rh.slide(haystack[i], haystack[i+needle.length]);
      // Compare hashes, and if they match we have a potential string match
      if(attempt === hashedNeedle){
        // Get the actual string value from that window
        var loc = haystack.substr(i+1, needle.length);
        // Compare the actual strings
        if(needle === loc){
          found = true;
          break;
        }      
      }
    }

    t.equal(found, true, "RollingHash - Checking ability to locate an existing string.");

    // The substring to find (does not exist in haystack)
    var needle = "bean";
    var hashedNeedle = rh.hash(needle);

    // Set the window to the start of the haystack
    rh.set(haystack.substr(0, needle.length));

    var found = false;

    // Roll through the haystack
    for(var i=0; i<haystack.length-needle.length; ++i){
      // RollingHash.slide() will slide the window and return the new hash value
      var attempt = rh.slide(haystack[i], haystack[i+needle.length]);
      // Compare hashes, and if they match we have a potential string match
      if(attempt === hashedNeedle){
        // Get the actual string value from that window
        var loc = haystack.substr(i+1, needle.length);
        // Compare the actual strings
        if(needle === loc){
          found = true;
          break;
        }      
      }
    }

    t.equal(found, false, "RollingHash - Checking ability to recognize a non existing string.");
  }catch(e){
    t.fail("RollingHash has failed.\n" + e.message);
  }

  t.end();
});