
// # Unit tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('should run without errors', function(assert){

  // Will make better unit tests in the future

  var sll = new Needle.SinglyLinkedList();
  sll.insertBack("three");
  sll.insertFront("one");
  sll.insertFront("two");
  // =>(["two", "one", "three"]) 

  sll.remove("two");
  sll.removeNth(1);
  sll.removeNth(0);
  
  //sll.find();
  //sll.findNth();

  var result = sll.size;
  console.log(result);
  assert.equal(result, 0);
  assert.end();
});