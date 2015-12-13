
// # Unit tests

var Needle = require('../src/needle.js');
var test = require('tape');

test('should run without errors', function(assert){

  // Will make better unit tests in the future

  var sll = new Needle.SinglyLinkedList();
  sll.insertBack("three");
  sll.insertFront("one");
  sll.insertFront("two");
  
  sll.find("three");
  sll.findNth(1);

  sll.remove("two");
  sll.removeNth(1);
  sll.removeNth(0);
  

  var result = sll.size;
  console.log(result);
  assert.equal(result, 0);
  assert.end();
});