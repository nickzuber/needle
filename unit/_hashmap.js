
// # Hashmap tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('Hashmap should run without errors', function(t){

  var map = new Needle.Hashmap();

  // put / size
  try{
    map.put("key", "string");
    map.put(0, "number");
    map.put({}, "object");
    map.put({}, "another object, same key");
    map.put(1, "another number");
    map.put(0, "another number, same key");
    t.equal(map.size(), 4, "Hashmap.put checking to see correct amount of items are added to hashmap.");
  }catch(e){
    t.fail("Hashmap.put has failed.\n" + e.message);
  }

  // get
  try{
    var entry = map.get({});
    t.equal(entry, "another object, same key", "Hashmap.get making sure key maps to correct value.");
  }catch(e){
    t.fail("Hashmap.get has failed.\n" + e.message);
  }
  
  // delete
  try{
    map.delete("key");
    t.equal(map.size(), 3, "Hashmap.delete making sure delete affects the size (internal iterater).");
    var successfulDelete = map.delete("keyThatDoesNotExist");
    t.equal(successfulDelete, false, "Hashmap.delete checking behavior for attempting to delete a null key");
    t.equal(map.size(), 3, "Hashmap.delete making sure delete affects the size (internal iterater).");
  }catch(e){
    t.fail("Hashmap.get has failed.\n" + e.message);
  }

  // next / iterater
  try{
    var counter = 0;
    // To check that the iterater is working properly, we can check
    // the amount of unique key value pairs it picks up
    for(var it = map.iterater(); it !== null; it = map.next()){
      ++counter;
    }
    var result = map.size() === counter;
    t.equal(result, true, "Hashmap.next / Hashmap.iterater checking the behavior of the internal iteraters.");
  }catch(e){
    t.fail("Hashmap.next / Hashmap.iterater has failed.\n" + e.message);
  }

  t.end();
});