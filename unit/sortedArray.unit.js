
// # SortedArray tests

var Needle = require('../src');
var test = require('tape');

test('SortedArray should run without errors', function(t){

  var arr = new Needle.SortedArray();

  // insert / size
  try{
    arr.insert(5);
    arr.insert(2);
    arr.insert(3);
    arr.insert(7);
    arr.insert(11);
    t.equal(arr.size(), 5, "SortedArray.insert checking to see correct amount of items are added to array.");
  }catch(e){
    t.fail("SortedArray.insert has failed.\n" + e.message);
  }

  // delete
  try{
    var result;
    result = arr.delete(5);
    t.equal(result, true, "SortedArray.delete making sure deletes non-null element.");
    result = arr.delete(99);
    t.equal(result, false, "SortedArray.delete making sure does not attempt to delete null element.");
  }catch(e){
    t.fail("SortedArray.delete has failed.\n" + e.message);
  }
  
  // get
  try{
    result = arr.get(0);
    t.equal(result, 2, "SortedArray.get making sure does get correct element.");
  }catch(e){
    t.fail("SortedArray.get has failed.\n" + e.message);
  }

  // insert (order)
  try{
    var error = false,
        sampleSize = 50,
        prevElement = undefined;
    // To check that the array is sorted properly
    for(var i=0; i<sampleSize; ++i){
      var rand = Math.floor(Math.random() * 20 + 1);
      arr.insert(rand);
    }
    prevElement = arr.get(0);
    for(var i=1; i<sampleSize; ++i){
      if(arr.get(i) < prevElement){
        error = true;
        break;
      }
      prevElement = arr.get(i);
    }
    t.equal(error, false, "SortedArray.insert making sure elements are inserted in order.");
  }catch(e){
    t.fail("SortedArray.insert (order) has failed.\n" + e.message);
  }

  t.end();
});